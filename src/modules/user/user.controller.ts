import Controller from "../../decorators/controller.decorator";
import {Post} from "../../decorators/handler.decorator";
import {UserService} from "./user.service";
import {Request, Response} from "express";
import {ResponseBody} from "../../utils/response-body.interface";
import {RegisterVm} from "./vm/register.vm";


@Controller('/user')
export class UserController {
    private readonly userService = new UserService();

    @Post('/pre-register')
    async preRegister(req: Request, res: Response) {
        const data = await this.userService.preRegister(req.body);
        res.json(data)
    }

    @Post('/register/:email/:verifyCode')
    async register(req: Request, res: Response) {
        const data = await this.userService.register(req.params.email, +req.params.verifyCode);
        res.json(data)
    }
}

