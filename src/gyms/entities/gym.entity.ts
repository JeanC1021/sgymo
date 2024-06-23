import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gym extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nit: string;

    @Column()
    gym: string;

    @Column()
    owner: string;

    @OneToMany(() => User, (user) => user.gym)
    user: User;


}
