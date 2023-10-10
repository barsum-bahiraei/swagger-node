import {appDataSource} from "../../startup/app-data-source";
import {Repository} from "typeorm";
import {UserEntity} from "./entities/user.entity";
import {PreRegisterDto} from "./dto/pre-register.dto";
import {ResponseBody} from "../../utils/response-body.interface";
import {cacheService} from "../../startup/cache-service";

export class UserService {
    private readonly userRepository: Repository<UserEntity> = appDataSource.getRepository(UserEntity);

    public async preRegister(preRegisterDto: PreRegisterDto): Promise<ResponseBody<UserEntity>> {
        const user = await this.userRepository.findOne({
            where: {
                email: preRegisterDto.email
            }
        });
        if (user) {
            return {
                statusCode: 200,
                message: "user exist"
            }
        }
        await cacheService.set(preRegisterDto.email, JSON.stringify(preRegisterDto), {
            EX: 7200,
            NX: true
        });
        // const newUser = await this.userRepository.create(preRegisterDto).save();
        return {
            statusCode: 200,
        }

    }
}