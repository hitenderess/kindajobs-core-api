import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRequiredSkillsController } from './job-required-skills.controller';
import { JobRequiredSkills } from './job-required-skills.entity';
import { JobRequiredSkillsService } from './job-required-skills.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([JobRequiredSkills])
  ],
  controllers: [JobRequiredSkillsController],
  providers: [JobRequiredSkillsService]
})
export class JobRequiredSkillsModule {}
