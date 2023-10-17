import Controller from "../../decorators/controller.decorator";
import {Post} from "../../decorators/handler.decorator";


@Controller('/user')
export class CategoryController {

    @Post("")
    async getAllAsTree() {

    }
}

