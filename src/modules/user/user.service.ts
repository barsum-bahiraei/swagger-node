import {appDataSource} from "../../startup/app-data-source";
import {Repository} from "typeorm";
import {UserEntity} from "./entities/user.entity";
import {PreRegisterDto} from "./dto/pre-register.dto";
import {ResponseBody} from "../../utils/response-body.interface";
import {cacheService} from "../../startup/cache-service";
import {RegisterVm} from "./vm/register.vm";
import {generateAccessToken} from "../../middlewares/token";

export class UserService {
    private readonly userRepository: Repository<UserEntity> = appDataSource.getRepository(UserEntity);

    public async preRegister(preRegisterDto: PreRegisterDto): Promise<ResponseBody<number>> {
        const user = await this.userRepository.findOne({
            where: {
                email: preRegisterDto.email
            }
        });
        if (!user) {
            await this.userRepository.create(preRegisterDto).save();
        }
        const verifyCode = Math.floor(Math.random() * (999999 - 10000) + 100000);
        await cacheService.set(preRegisterDto.email, verifyCode, {
            EX: 180
        });
        return {
            statusCode: 200,
            data: verifyCode
        }

    }

    public async register(email: string, verifyCode: number): Promise<ResponseBody<RegisterVm>> {
        const cacheVerifyCode = await cacheService.get(email);
        if (!cacheVerifyCode) {
            return {
                statusCode: 400,
                message: "verify code expired!"
            }
        }
        if (Number(cacheVerifyCode) == verifyCode) {
            return {
                statusCode: 200,
                data: {
                    token: generateAccessToken(email)
                }
            }
        }
        return {
            statusCode: 400,
            message: "Code Not Correct!"
        }
    }
}