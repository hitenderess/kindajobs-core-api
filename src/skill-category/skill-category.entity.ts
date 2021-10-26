import { AbstractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity('master_skill_category')
export class SkillCategory extends AbstractEntity {
    @Column()
    name: string;

    @Column({
        length: 4
    })
    code: string;

    @Column({
        type: 'text'
    })
    description: string;

    @Column({
        default: true
    })
    isActive: boolean;
}