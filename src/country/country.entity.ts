import { Column, Entity } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('master_country')
export class Country extends AbstractEntity {

    @Column()
    name: string;

    @Column({
        length: 4
    })
    code: string;

    @Column({
        default: true
    })
    isActive: boolean;
}
