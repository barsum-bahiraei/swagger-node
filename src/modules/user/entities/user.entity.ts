import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    email?: string;

    @Column({unique: true})
    phoneNumber: string;

    @Column({nullable: true})
    password?: string;

    @Column({nullable: true})
    firstName?: string;

    @Column({nullable: true})
    lastName?: string;
}
