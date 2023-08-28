import express, {Response, Request, Router} from "express";

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