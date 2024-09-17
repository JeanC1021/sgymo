import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, length: 50})
    name: string;

    @ManyToOne(() => User, (user) => user.permission)
    user: User;




}
