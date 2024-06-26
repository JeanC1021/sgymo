import { Module } from '@nestjs/common';
import { GymsController } from '../controllers/gyms.controller';
import { GymsService } from 'src/services/gyms.service';

@Module({
  controllers: [GymsController],
  providers: [GymsService],
})
export class GymsModule {}
