import express, {Express} from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import {BaseRouter} from "./modules/base.router";

export class App {
    httpServer: Express;
    port: number = Number(process.env.PORT) || 3000;

    constructor() {
        this.httpServer = express();
    }

    public Start() {
        this.initialSwagger();
        new BaseRouter(this.httpServer).initialRouter();
        this.httpServer.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}/swagger`);
        })
    }

    private initialSwagger() {
        this.httpServer.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    }
}