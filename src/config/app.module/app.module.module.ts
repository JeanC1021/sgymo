import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789d*',
      database: 'SGYM',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}