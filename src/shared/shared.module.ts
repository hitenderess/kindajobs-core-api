import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule, AppConfigService } from './config';
import { PasswordCiper, VerificationTokenGenerator } from './utils';

const Utils = [PasswordCiper, VerificationTokenGenerator];

const imports = [];
imports.push(AppConfigModule);
if (process.env.NODE_ENV !== 'test') {
    imports.push(
        TypeOrmModule.forRootAsync({
            imports: [AppConfigModule],
            useFactory: (configService: AppConfigService) => configService.dbConnectionOptions,
            inject: [AppConfigService],
        }),
    );
}

@Global()
@Module({
    imports,
    providers: [...Utils],
    exports: [...Utils],
})
export class SharedModule {}
