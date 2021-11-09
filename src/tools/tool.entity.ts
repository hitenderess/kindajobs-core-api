import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('master_tool')
export class Tool extends AbstractEntity {
    @Column()
    name: string;

    @Column()
    decription: string;

    @Column({
        default: true
    })
    isActive: boolean;

}