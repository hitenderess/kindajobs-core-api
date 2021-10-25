import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor, INestApplication, ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';


function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Kindajobs API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger))
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe());
  const reflactor = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflactor))
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
