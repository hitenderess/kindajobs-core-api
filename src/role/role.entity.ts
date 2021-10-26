import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('master_roles')
export class Role extends AbstractEntity {
    @Column()
    name: string;

    @Column({
        type: 'text'
    })
    description: string;

    @Column({
        default: true
    })
    isActive: boolean;
}