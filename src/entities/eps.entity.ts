import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class Eps {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false, length: 50})
    eps: string;

    @OneToMany(() => Profile, (profile) => profile.eps)
    profile: Profile;
}
