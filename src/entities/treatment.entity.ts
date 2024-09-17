import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class Treatment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, length: 50})
    treatment: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    reason: string;

    @ManyToOne(() => Customer, (customer) => customer.treatment)
    customer: Customer;
}