import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,   //transforma los dto de number a string
      transformOptions: {   // los dos transform es para hacer eso
        enableImplicitConversion: true,
      }
    })
  );

  await app.listen( process.env.PORT! );
  console.log(`on running on port ${process.env.PORT!}`)

 
}
bootstrap();
