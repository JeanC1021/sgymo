import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Body } from "./body.entity";

@Entity()
export class Measure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    measurement: number;

    @OneToMany(() => Body, (body) => body.measure)
    body: Body;

}
