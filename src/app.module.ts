import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { GymsModule } from './gyms/gyms.module';
import { Gym } from './gyms/entities/gym.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789d*',
      database: 'sgym',
      entities: [User, Gym],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    GymsModule,],
})
export class AppModule { }
