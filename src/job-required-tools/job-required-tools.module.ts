import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRequiredToolsController } from './job-required-tools.controller';
import { JobRequiredTools } from './job-required-tools.entity';
import { JobRequiredToolsService } from './job-required-tools.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobRequiredTools])
  ],
  controllers: [JobRequiredToolsController],
  providers: [JobRequiredToolsService]
})
export class JobRequiredToolsModule {}
