import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GriddyModule } from './griddy/griddy.module';

@Module({
  imports: [GriddyModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
