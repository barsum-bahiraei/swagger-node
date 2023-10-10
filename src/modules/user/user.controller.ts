import Controller from "../../decorators/controller.decorator";
import {Post} from "../../decorators/handler.decorator";


@Controller('/user')
export class UserController {

    // private initialRouter() {
    // }

    @Post('/pre-register')
    preRegister() {
        console.log(this)
        // res.send("Hello World!")
    }
}

