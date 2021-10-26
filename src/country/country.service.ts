import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Country } from "./country.entity";

@Injectable()
export class CountryService extends TypeOrmCrudService<Country> {
    constructor(@InjectRepository(Country) public repository: Repository<Country>) {
        super(repository)
    }
}