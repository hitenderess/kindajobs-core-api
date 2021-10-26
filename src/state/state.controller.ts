import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { State } from './state.entity';
import { StateService } from './state.service';

@ApiTags('state')
@Controller('states')
@Crud({
    model: {
        type: State
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        }
    }
})
export class StateController implements CrudController<State> {
    constructor(public service: StateService) {}
}
