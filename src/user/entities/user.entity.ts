import { Gym } from 'src/gyms/entities/gym.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

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

  @ManyToOne(() => Gym, (gym) => gym.user, {cascade: true})
  gym: Gym;
}

