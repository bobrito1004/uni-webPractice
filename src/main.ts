import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";
import "reflect-metadata";
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger";
import {PrismaService} from "../prisma/prisma.service";
import { ValidationPipe } from "@nestjs/common";
import supertokens from 'supertokens-node';
import { SupertokensExceptionFilter } from './auth/auth.filter';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "/public"));
  app.setBaseViewsDir(join(__dirname, "..", "/views"));
  app.setViewEngine("pug");
  const PORT = process.env.PORT || 12345;
  const prismaService: PrismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Docs')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const swaggerDocs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocs);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['https://localhost:12345'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });
  app.useGlobalFilters(new SupertokensExceptionFilter());
  await app.listen(PORT);
};

bootstrap();
