import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@ApiTags('role')
@Controller('role')
@Crud({
    model: {
        type: Role
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class RoleController implements CrudController<Role> {
    constructor(public service: RoleService) {}
}