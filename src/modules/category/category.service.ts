import {Repository} from "typeorm";
import {CategoryEntity} from "./entities/category.entity";
import {appDataSource} from "../../startup/app-data-source";
import {ResponseBody} from "../../utils/response-body.interface";
import {AllCategoryDto} from "./dto/all-category.dto";
import {UserEntity} from "../user/entities/user.entity";
import {CreateCategoryDto} from "./dto/create-category.dto";
import {validate, validateOrReject} from "class-validator";

export class CategoryService {
    private readonly categoryRepository: Repository<CategoryEntity> = appDataSource.getRepository(CategoryEntity);


    async createCategory(createCategoryDto: CreateCategoryDto): Promise<ResponseBody<CategoryEntity>> {
        try {
            const obj = Object.assign(new CreateCategoryDto(), createCategoryDto)
            await validateOrReject(obj)
        } catch (e) {
            console.log(e)
            return {
                statusCode: 400,
                message: 'BadRequest'
            }
        }

        const newCategory = new CategoryEntity();
        newCategory.title = createCategoryDto.title;
        newCategory.path = 'sadf';
        const category = await this.categoryRepository.create(newCategory).save();
        return {
            statusCode: 200,
            data: category
        };
    }

    async getAllAsTree(): Promise<ResponseBody<Array<AllCategoryDto>>> {
        const categories = await this.categoryRepository.find();

        return {
            statusCode: 200,
            data: []
        }
    }
}