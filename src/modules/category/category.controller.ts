import Controller from "../../decorators/controller.decorator";
import {Post} from "../../decorators/handler.decorator";
import {Request, Response} from "express";
import {CategoryService} from "./category.service";


@Controller('/category')
export class CategoryController {
    private readonly categoryService: CategoryService = new CategoryService();


    @Post("/create")
    async createCategory(req: Request, res: Response) {
        const data = await this.categoryService.createCategory(req.body);
        res.json(data)
    }

    @Post("get-all")
    async getAllAsTree(req: Request, res: Response) {
        const data = await this.categoryService.getAllAsTree();
        res.json(data);
    }
}

