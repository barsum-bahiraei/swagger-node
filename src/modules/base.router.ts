import {UserController} from "./user/user.controller";
import {Express} from "express";

export class BaseRouter {
    httpServer: Express

    constructor(httpServer: Express) {
        this.httpServer = httpServer;
    }

    initialRouter() {
        this.httpServer.use('/user', new UserController().router);
    }
}