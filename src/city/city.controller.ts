import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { City } from './city.entity';
import { CityService } from './city.service';
@ApiTags('city')
@Controller('cities')
@Crud({
    model: {
        type: City
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class CityController implements CrudController<City> {
    constructor(public service: CityService) {}
}
