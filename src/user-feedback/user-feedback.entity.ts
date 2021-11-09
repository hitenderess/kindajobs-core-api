import { Auth } from "src/auth/entities/auth.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "../shared/entities/abstract.entity";

@Entity('user_feedbacks')
export class UserFeedbacks extends AbstractEntity {

    @Column()
    message: string;

    @Column()
    user_id: number;

    @ManyToOne(() => Auth, auth => auth.feedbacks)
    @JoinColumn()
    user: Auth;

}
