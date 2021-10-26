import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Skill } from './skill.entity';
import { SkillService } from './skill.service';

@ApiTags('skill')
@Controller('skills')
@Crud({
    model: {
        type: Skill
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class SkillController implements CrudController<Skill> {
    constructor(public service: SkillService) {}
}
