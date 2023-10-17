import {DataSource} from "typeorm";


export const appDataSource: DataSource = new DataSource({
    type: 'mssql',
    host: '127.0.0.1',
    port: 1433,
    username: 'sa',
    password: 'B@rsum1375bar',
    database: 'DbStore',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../modules/*.entity.{ts,js}'],
    subscribers: [],
    migrations: [],
    extra: {
        trustServerCertificate: true,
    }
})