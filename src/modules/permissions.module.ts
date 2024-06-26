import { Module } from '@nestjs/common';
import { PermissionsService } from 'src/services/permissions.service';
// import { PermissionsController } from './permissions.controller';

@Module({
  // controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
