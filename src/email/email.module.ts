import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppConfigService } from '@shared/config/app-config.service';
import { EmailService } from './email.service';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { AppConfigModule } from '@shared/config/app-config.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => ({
        transport: {
          host: configService.smtpOptions.smtpHost,
          port: configService.smtpOptions.smtpPort,
          secure: false,
        },
        defaults: {
          from: configService.smtpOptions.mailFrom,
        },
        template: {
          dir: __dirname + '/templates/',
          adapter: new EjsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [AppConfigService],
    }),
  ],
  providers: [EmailService]
})
export class EmailModule { }
