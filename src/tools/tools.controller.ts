import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Tool } from './tool.entity';
import { ToolsService } from './tools.service';

@ApiTags('tool')
@Controller('tools')
@Crud({
    model: {
        type: Tool
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        }
    }
})
export class ToolsController implements CrudController<Tool> {
    constructor(public service: ToolsService) {}
}
