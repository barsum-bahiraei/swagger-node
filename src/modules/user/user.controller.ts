import express, {Response, Request, Router} from "express";
import {PreRegisterDto} from "./dto/pre-register.dto";
import {UserService} from "./user.service";
import {BaseController} from "../base.controller";

export class UserController extends BaseController {
    router: Router;
    private readonly userService: UserService = new UserService();

    constructor() {
        super();
        this.userService = new UserService();
        // this.initialRouter();
        this.router = express.Router();
        this.router.post('/pre-register', this.preRegister);
    }

    // private initialRouter() {
    // }

    preRegister() {
        console.log(this)
        // res.send("Hello World!")
    }
}