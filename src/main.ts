/* eslint-disable prettier/prettier */
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import {resolve } from 'path';
import { AppModule } from './app.module';
import 'reflect-metadata';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  
  app.useStaticAssets(resolve('./src/public/assets/'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
