import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobFilesController } from './job-files.controller';
import { JobFiles } from './job-files.entity';
import { JobFilesService } from './job-files.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobFiles])
  ],
  controllers: [JobFilesController],
  providers: [JobFilesService]
})
export class JobFilesModule {}
