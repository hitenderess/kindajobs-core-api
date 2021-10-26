import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillService],
  controllers: [SkillController]
})
export class SkillModule {}
