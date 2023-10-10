import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity("User")
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({nullable: true})
    phoneNumber?: string;

    @Column({nullable: true})
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    lastLogin?: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
    createdAt?: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    updatedAt?: string;
}
