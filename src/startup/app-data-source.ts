import {DataSource} from "typeorm";
import {UserEntity} from "../modules/user/entities/user.entity";

export class AppDataSource {
    dataSource: DataSource;

    public initialDataSource() {
        this.dataSource = new DataSource({
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
        });
        this.dataSource.initialize().then(() => {
            console.log("Database Successful Connect")
        }).catch(() => {
            console.log("Database Error Connect")
        })
    }
}