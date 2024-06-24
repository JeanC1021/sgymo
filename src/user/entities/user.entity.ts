// import { ROLES } from 'src/config/constants/Roles';
import { ROL } from 'src/Enums/Rol.enum';
import { Gym } from 'src/gyms/entities/gym.entity';
import { Permissions } from 'src/permissions/entities/permission.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ type: 'enum', enum: ROL, default: ROL.BASIC })
  rol: ROL;

  @ManyToOne(() => Gym, (gym) => gym.user, { cascade: true })
  gym: Gym;

  @OneToMany(() => Permissions, (permissions) => permissions.user, { cascade: true })
  permission: Permissions;
}


