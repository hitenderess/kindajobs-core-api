import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Country } from './country.entity';
import { CountryService } from './country.service';

@ApiTags('country')
@Controller('countries')
@Crud({
    model: {
        type: Country,
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true,
        },
    },
})
export class CountryController implements CrudController<Country> {
    constructor(public service: CountryService) {}
}
