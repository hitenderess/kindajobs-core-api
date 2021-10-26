import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('master_state')
export class State extends AbstractEntity {
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
    countryId: number;
}