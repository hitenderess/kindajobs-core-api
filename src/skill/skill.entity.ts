import { AbstractEntity } from "@shared/entities/abstract.entity";
import { SkillCategory } from "../skill-category/skill-category.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('master_skills')
export class Skill extends AbstractEntity {
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

    @ManyToOne(
        () => SkillCategory
    )
    category: SkillCategory;
}