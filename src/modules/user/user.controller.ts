import Controller from "../../decorators/controller.decorator";
import {Post} from "../../decorators/handler.decorator";
import {UserService} from "./user.service";


@Controller('/user')
export class UserController {
    private readonly userService = new UserService();
    // private initialRouter() {
    // }

    @Post('/pre-register')
    async preRegister() {
        await this.userService.preRegister();
    }
}

