import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Gym extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, length: 50})
    nit: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    gym: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    owner: string;

    @OneToMany(() => User, (user) => user.gym)
    user: User;


}
