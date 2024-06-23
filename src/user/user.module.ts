import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { GymsModule } from 'src/gyms/gyms.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
