import express, {Express} from "express";

export class App {
    httpServer: Express;

    constructor() {
        this.httpServer = express();
    }
}