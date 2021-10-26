import { Column, Entity } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('master_city')
export class City extends AbstractEntity {

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

    @Column()
    stateId: number;
}
