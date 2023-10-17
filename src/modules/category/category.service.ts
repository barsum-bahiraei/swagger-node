import {Repository} from "typeorm";
import {CategoryEntity} from "./entities/category.entity";
import {appDataSource} from "../../startup/app-data-source";

export class CategoryService {
    private readonly companyRepository: Repository<CategoryEntity> = appDataSource.getRepository(CategoryEntity);

    async getAllAsTree() {
        await this.companyRepository.find();
    }
}