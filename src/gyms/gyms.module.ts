import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [GymsController],
  providers: [GymsService],
})
export class GymsModule {}
