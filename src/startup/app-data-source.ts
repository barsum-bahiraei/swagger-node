import {DataSource} from "typeorm";
import {UserEntity} from "../modules/user/entities/user.entity";


export const appDataSource: DataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'B@rsum1375bar',
    database: 'chat',
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    subscribers: [],
    migrations: [],
})