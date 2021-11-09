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
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserBankdetailModule } from './user-bankdetail/user-bankdetail.module';
import { JobModule } from './job/job.module';
import { UserModule } from './user/user.module';
import { JobApplicationModule } from './job-application/job-application.module';
import { ToolsModule } from './tools/tools.module';
import { JobFilesModule } from './job-files/job-files.module';
import { JobRequiredSkillsModule } from './job-required-skills/job-required-skills.module';
import { JobRequiredToolsModule } from './job-required-tools/job-required-tools.module';
import { UserContractsModule } from './user-contracts/user-contracts.module';
import { UserContractMessagesModule } from './user-contract-messages/user-contract-messages.module';
import { UserContractPaymentsModule } from './user-contract-payments/user-contract-payments.module';
import { UserContractFeedbackModule } from './user-contract-feedback/user-contract-feedback.module';
import { UserContractRefundsModule } from './user-contract-refunds/user-contract-refunds.module';
import { UserNotificationsModule } from './user-notifications/user-notifications.module';
import { UserFeedbackModule } from './user-feedback/user-feedback.module';

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
    UserProfileModule,
    UserBankdetailModule,
    JobModule,
    UserModule,
    JobApplicationModule,
    ToolsModule,
    JobFilesModule,
    JobRequiredSkillsModule,
    JobRequiredToolsModule,
    UserContractsModule,
    UserContractMessagesModule,
    UserContractPaymentsModule,
    UserContractFeedbackModule,
    UserContractRefundsModule,
    UserNotificationsModule,
    UserFeedbackModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
