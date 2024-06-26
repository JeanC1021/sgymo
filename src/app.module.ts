import { Module } from '@nestjs/common';
import { UserModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { GymsModule } from './modules/gyms.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './modules/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.develop.env',
    }),
    TypeOrmModule.
      forRoot({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        synchronize: true,
      }),
    UserModule,
    AuthModule,
    GymsModule,
    ProfileModule,
  ],
})
export class AppModule { }
