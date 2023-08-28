import {Repository} from "typeorm";
import {UserEntity} from "./entities/user.entity";
import {AppDataSource} from "../../startup/app-data-source";

export class UserService {
    private readonly userRepository: Repository<UserEntity> =
        new AppDataSource().dataSource.getRepository(UserEntity);



    public getAll() {
        console.log("amin")
    }
}