import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import{DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Product expample')
  .setDescription('The product API description')
  .setVersion('1.0')
  .addTag('product')
  .build();

  const document= SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
