import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn} from 'typeorm';

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

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;
}
