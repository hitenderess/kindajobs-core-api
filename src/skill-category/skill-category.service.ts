import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { SkillCategory } from './skill-category.entity';

@Injectable()
export class SkillCategoryService extends TypeOrmCrudService<SkillCategory> {
    constructor(@InjectRepository(SkillCategory) public repository: Repository<SkillCategory>) {
        super(repository)
    }
}
