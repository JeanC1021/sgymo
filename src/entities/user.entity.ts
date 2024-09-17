import { IsEmail, IsNotEmpty } from 'class-validator';
import { ROL } from 'src/Enums/rol.enum';
import { Gym } from 'src/entities/gym.entity';
import { Permission } from 'src/entities/permission.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true }) // Esta opción hace que el correo sea único en la base de datos
  @IsEmail()
  @IsNotEmpty() // Valida que el campo no sea nulo ni vacío
  email: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  password: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  lastName: string;

  @Column({ type: 'enum', enum: ROL, default: ROL.BASIC })
  rol: ROL;

  @ManyToOne(() => Gym, (gym) => gym.user)
  gym: Gym;

  @OneToMany(() => Permission, (permissions) => permissions.user)
  permission: Permission;

  @OneToMany(() => Customer, (customer) => customer.user)
  customer: Customer;
}


