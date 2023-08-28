import express, {Response, Request, Router} from "express";
import {UserService} from "./user.service";

export class UserController {
    router: Router = express.Router();
    private readonly userService = new UserService();

    constructor() {
        this.router.get('/getAll', this.getAll)
    }

    public getAll(req: Request, res: Response) {
        console.log(this.userService)
        res.json({
            "name": "amin"
        })
    }
}