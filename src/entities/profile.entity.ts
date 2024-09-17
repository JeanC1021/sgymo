import { DocumentType } from "src/entities/documentType.entity";
import { Eps } from "src/entities/eps.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Img } from "./img.entity";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 50 })
    document: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    firstName: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    lastName: string;

    @Column({type: 'date', nullable: false})
    birthDate: Date;

    @Column({type: 'varchar', nullable: false, length: 50})
    address: string;

    @Column({type: 'int', nullable: false})
    phoneNumber: number;

    @Column({type: 'varchar', nullable: false, length: 50})
    profession: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    gender: string;

    @ManyToOne(() => DocumentType, (documentType) => documentType.profile)
    documentType: DocumentType;

    @ManyToOne(() => Eps, (eps) => eps.profile)
    eps: Eps;

    @OneToMany(()=> Img, (image) => image.profile)
    img: Img;




}
