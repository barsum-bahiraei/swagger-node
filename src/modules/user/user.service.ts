// import {Repository} from "typeorm";
// import {UserEntity} from "./entities/user.entity";
// import {AppDataSource} from "../../startup/app-data-source";
import {PreRegisterDto} from "./dto/pre-register.dto";

export class UserService {
    // private readonly userRepository: Repository<UserEntity> =
    //     new AppDataSource().dataSource.getRepository(UserEntity);

    public async preRegister() {
        console.log("amin")
        console.log(this)
    }
}