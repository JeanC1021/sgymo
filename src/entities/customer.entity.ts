import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Plans } from "./plan.entity";
import { User } from "./user.entity";
import { Treatment } from "./treatment.entity";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Plans, (plan) => plan.customer)
    plan: Plans;

    @ManyToOne(() => User, (user) => user.customer)
    user: User;

    @OneToMany(() => Treatment, (treatment) => treatment.customer)
    treatment: Treatment;
}