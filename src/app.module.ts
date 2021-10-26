import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerModule } from 'nestjs-pino';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigService } from './shared/config/app-config.service';
import { AppConfigModule } from './shared/config/app-config.module';
import { AuthModule } from './auth/auth.module';
import { ReportReasonModule } from './report-reason/report-reason.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { RefundReasonModule } from './refund-reason/refund-reason.module';
import { SkillCategoryModule } from './skill-category/skill-category.module';
import { SkillModule } from './skill/skill.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    LoggerModule.forRoot(),
    AppConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => configService.dbConnectionOptions,
      inject: [AppConfigService]
    }),
    AuthModule,
    ReportReasonModule,
    CountryModule,
    StateModule,
    CityModule,
    RefundReasonModule,
    SkillCategoryModule,
    SkillModule,
    RoleModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
