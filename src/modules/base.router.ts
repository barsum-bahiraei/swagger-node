import {App} from "../startup/app";
import {UserController} from "./user/user.controller";
import {Express} from "express";
import {UserService} from "./user/user.service";

export class BaseRouter {
    httpServer: Express

    constructor(httpServer: Express) {
        this.httpServer = httpServer;
    }

    initialRouter() {
        this.httpServer.use('/user', new UserController().router);
    }
}