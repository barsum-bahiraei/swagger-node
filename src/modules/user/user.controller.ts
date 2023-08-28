import express, {Response, Request, Router} from "express";
import {UserService} from "./user.service";

export class UserController {
    router: Router = express.Router();

    constructor() {
        this.router.get('/getAll', this.getAll)
    }

    public getAll(req: Request, res: Response) {
        res.json({
            "name": "amin"
        })
    }
}