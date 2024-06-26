import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class Eps {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eps: string;

    @OneToMany(() => Profile, (profile) => profile.eps)
    profile: Profile;
}
