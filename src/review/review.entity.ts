import { Column, Entity } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";


@Entity('review')
export class Review extends AbstractEntity {

    @Column()
    rating: number;

    @Column({
        type: 'text'
    })
    review: string;

    @Column()
    userId: number;

    @Column()
    reviewerId: number;
    
}
