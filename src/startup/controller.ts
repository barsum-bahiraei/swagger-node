import express, {Express, Handler, Router} from "express";
import {IRouter} from "../decorators/handler.decorator";
import {baseController} from "../modules/base.controller";
import {MetadataKeys} from "../utils/metadata.keys";

export function initialController(httpServer: Express) {
    httpServer.use(express.json());
    httpServer.use(express.urlencoded({extended: true}));
    const info: Array<{ api: string; handler: string }> = [];

    baseController.forEach((controllerClass: any) => {
        const controllerInstance: { [handleName: string]: Handler } =
            new controllerClass() as any;

        const pathController: string = Reflect.getMetadata(
            MetadataKeys.BASE_PATH,
            controllerClass,
        );
        const routers: IRouter[] = Reflect.getMetadata(
            MetadataKeys.ROUTERS,
            controllerClass,
        );

        const router: Router = express.Router();

        routers.forEach(({method, path, handlerName}) => {
            router[method](
                path,
                controllerInstance[String(handlerName)].bind(controllerInstance),
            );

            info.push({
                api: `${method.toLocaleUpperCase()} ${pathController + path}`,
                handler: `${controllerClass.name}.${String(handlerName)}`,
            });
        });

        httpServer.use(pathController, router);
    });
    console.table(info);
}