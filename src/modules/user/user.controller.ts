import Controller from "../../decorators/controller.decorator";
import {Post} from "../../decorators/handler.decorator";
import {UserService} from "./user.service";
import {Request, Response} from "express";
import {PreRegisterDto} from "./dto/pre-register.dto";
import {ResponseBody} from "../../utils/response-body.interface";
import {UserEntity} from "./entities/user.entity";


@Controller('/user')
export class UserController {
    private readonly userService = new UserService();

    @Post('/pre-register')
    async preRegister(req: Request, res: Response<ResponseBody<UserEntity>>) {
        const data = await this.userService.preRegister(req.body);
        res.json(data)
    }
}

