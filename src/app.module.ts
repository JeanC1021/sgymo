import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { GymsModule } from './gyms/gyms.module';
import { ConfigModule } from '@nestjs/config';
import { PermissionsModule } from './permissions/permissions.module';
import { ProfileModule } from './profile/profile.module';

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
    PermissionsModule,
    ProfileModule,
  ],
})
export class AppModule { }
