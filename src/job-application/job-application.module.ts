import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplicationController } from './job-application.controller';
import { JobApplication } from './job-application.entity';
import { JobApplicationService } from './job-application.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobApplication])
  ],
  controllers: [JobApplicationController],
  providers: [JobApplicationService]
})
export class JobApplicationModule {}
