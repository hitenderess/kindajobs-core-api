import { ConnectionOptions } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from "../typeorm/snake-naming-stratergy";
import * as path from "path";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppConfigService {

    constructor(private configService: ConfigService) { }

    get dbConnectionOptions(): ConnectionOptions {
        return {
            type: 'postgres',
            host: this.get<string>('DB_HOST'),
            port: this.get<number>('DB_PORT'),
            username: this.get('DB_USERNAME'),
            password: this.get('DB_PASSWORD'),
            database: this.get<string>('DB_DATABASE'),
            entities: [path.join(__dirname + '/../../**/*.entity{.ts,.js}')],
            migrations: [path.join(__dirname + '/../../database/migrations/*{.ts,.js}')],
            logging: this.get<string>('DB_LOGGING') === 'true',
            synchronize: this.get<string>('DB_SYNCHRONIZE') === 'true',
            namingStrategy: new SnakeNamingStrategy(),
        }
    }

    get<T = any>(propertyPath: string, defaultValue?: T): T | undefined {
        return this.configService.get<T>(propertyPath, defaultValue);
    }
}