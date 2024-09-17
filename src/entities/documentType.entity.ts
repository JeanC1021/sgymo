import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class DocumentType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', nullable: false, length: 50})
    aliases: string;

    @Column({type: 'varchar', nullable: false, length: 50})
    type: string;

    @OneToMany(() => Profile, (profile) => profile.documentType)
    profile: Profile;
}
