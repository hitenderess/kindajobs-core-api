import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillCategoryController } from './skill-category.controller';
import { SkillCategory } from './skill-category.entity';
import { SkillCategoryService } from './skill-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([SkillCategory])],
  controllers: [SkillCategoryController],
  providers: [SkillCategoryService]
})
export class SkillCategoryModule {}
