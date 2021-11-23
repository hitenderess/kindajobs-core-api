import { Auth } from "../auth/entities/auth.entity";
import { Role } from "../role/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";

@Entity('user_notifications')
export class UserNotifications extends AbstractEntity {

    @Column()
    message: string;

    @Column()
    user_id: number;

    @Column()
    notification_category_id: number;

    @Column({
        default: false
    })
    is_read: boolean;

    @ManyToOne(() => Auth, auth => auth.notifications)
    @JoinColumn()
    user: Auth;

    @ManyToOne(() => Role)
    role: Role
}
