import { Column, Entity } from "typeorm";
import { AbstractEntity } from "@shared/entities/abstract.entity";
import { NotificationType } from "@shared/enums/notification-type";

@Entity('master_notifications')
export class Notifications extends AbstractEntity {

    @Column()
    type: NotificationType;

}
