import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeepPartial, DeleteDateColumn, Column } from 'typeorm';

export abstract class AbstractEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
        type: 'timestamptz',
        name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamptz',
        name: 'updated_at',
    })
    updatedAt: Date;

    @Column()
    created_by:number;

    @Column()
    modified_by:number;
}
