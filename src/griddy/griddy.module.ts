import { Module } from '@nestjs/common';
import { GriddyService } from './griddy.service';
import { GriddyController } from './griddy.controller';

@Module({
  controllers: [GriddyController],
  providers: [GriddyService],
})
export class GriddyModule {}
