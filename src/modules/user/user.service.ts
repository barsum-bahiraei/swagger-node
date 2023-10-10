import {appDataSource} from "../../startup/app-data-source";
import {Repository} from "typeorm";
import {UserEntity} from "./entities/user.entity";

export class UserService {
    private readonly userRepository: Repository<UserEntity> = appDataSource.getRepository(UserEntity);

    public async preRegister() {
        console.log(await this.userRepository.find())
    }
}