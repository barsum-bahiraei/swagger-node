import express, {Response, Request, Router} from "express";
import {PreRegisterDto} from "./dto/pre-register.dto";
import {UserService} from "./user.service";

export class UserController {
    router: Router;
    private readonly userService: UserService;

    constructor() {
        this.userService = new UserService();
        console.log(this.userService.preRegister())
        // this.userService = new UserService();
        this.initialRouter();
    }

    private initialRouter() {
        this.router = express.Router();
        this.router.post('/pre-register', this.preRegister);
    }

    public preRegister(req: Request<null, null, PreRegisterDto>, res: Response) {
        console.log(this)
        // console.log(this.router)
        // await this.userService.preRegister()
        // console.log(this.userService)
        // this.userService.preRegister(req.body)
    }
}