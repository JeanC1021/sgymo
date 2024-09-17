import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Measure } from "./measure.entity";

@Entity()
export class Body {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 50 })
    name: string;

    @CreateDateColumn()
    dateTaken: Date;

    @ManyToOne(() => Measure, (measure) => measure.body)
    measure: Measure;
}