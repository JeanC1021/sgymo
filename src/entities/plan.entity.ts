import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class Plans {
    @PrimaryColumn()
    id:number;

    @Column({type: 'varchar', nullable: false, length: 20})
    plan: string;

    @OneToMany(() => Customer, (Customer) => Customer.plan)
    customer: Customer;
}
