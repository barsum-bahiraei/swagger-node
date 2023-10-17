import express, {Express} from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";
import 'reflect-metadata';
import {appDataSource} from "./app-data-source";
import {initialController} from "./controller";
import {cacheService} from "./cache-service";
import dotenv from 'dotenv';

export class Main {
    httpServer: Express;
    port: number;

    constructor() {
        dotenv.config();
        this.httpServer = express();
        this.port = Number(process.env.PORT) || 3000;

    }

    async Start() {
        initialController(this.httpServer);
        this.initialSwagger();
        cacheService.on('error', (err) => console.log('Redis Client Error', err));
        await cacheService.connect();
        appDataSource.initialize().then(() => {
            console.log("Database Successful Connect")
        }).catch((err) => {
            console.log(err)
            console.log("Database Error Connect")
        })
        this.httpServer.listen(this.port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${this.port}/swagger`);
        })
    }

    private initialSwagger() {
        this.httpServer.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    }
}