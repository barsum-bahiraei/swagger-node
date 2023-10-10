import express, {Express} from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import 'reflect-metadata';
import {AppDataSource} from "./app-data-source";
import {initialController} from "./controller";

export class App {
    httpServer: Express;
    port: number = Number(process.env.PORT) || 3000;

    constructor() {
        this.httpServer = express();
    }

    public Start() {
        initialController(this.httpServer);
        this.initialSwagger();
        new AppDataSource().initialDataSource();
        this.httpServer.use(express.json());
        this.httpServer.use(express.urlencoded({extended: true}));
        this.httpServer.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}/swagger`);
        })
    }

    private initialSwagger() {
        this.httpServer.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    }
}