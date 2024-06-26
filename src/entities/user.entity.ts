import { ROL } from 'src/Enums/rol.enum';
import { Gym } from 'src/entities/gym.entity';
import { Permissions } from 'src/entities/permission.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: false,unique: true })
  email: string;

  @Column({type: 'varchar', nullable: false, length: 50})
  password: string;

  @Column({type: 'varchar', nullable: false, length: 50})
  name: string;

  @Column({type: 'varchar', nullable: false, length: 50})
  lastName: string;

  @Column({ type: 'enum', enum: ROL, default: ROL.BASIC })
  rol: ROL;

  @ManyToOne(() => Gym, (gym) => gym.user, { cascade: true })
  gym: Gym;

  @OneToMany(() => Permissions, (permissions) => permissions.user, { cascade: true })
  permission: Permissions;
}


