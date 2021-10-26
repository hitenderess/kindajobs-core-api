import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { SkillCategory } from './skill-category.entity';
import { SkillCategoryService } from './skill-category.service';


@ApiTags('skill-category')
@Controller('skill-categories')
@Crud({
    model: {
        type: SkillCategory
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class SkillCategoryController implements CrudController<SkillCategory> {
    constructor(public service: SkillCategoryService) {}
}
