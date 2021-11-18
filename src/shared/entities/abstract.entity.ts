import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeepPartial, DeleteDateColumn, Column } from 'typeorm';

export abstract class AbstractEntity {

    public constructor(input?: DeepPartial<AbstractEntity>) {
        if (input) {
            for (const [key, value] of Object.entries(input)) {
                (this as any)[key] = value;
            }
        }
    }
    
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
