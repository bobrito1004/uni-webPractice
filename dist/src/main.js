"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const supertokens_node_1 = require("supertokens-node");
const app_module_1 = require("./app.module");
require("reflect-metadata");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const auth_filter_1 = require("./auth/auth.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "/public"));
    app.setBaseViewsDir((0, path_1.join)(__dirname, "..", "/views"));
    app.setViewEngine("pug");
    const PORT = process.env.PORT || 12345;
    const prismaService = app.get(prisma_service_1.PrismaService);
    prismaService.enableShutdownHooks(app);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Docs')
        .setDescription('API description')
        .setVersion('1.0')
        .build();
    const swaggerDocs = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, swaggerDocs);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: ['https://localhost:766'],
        allowedHeaders: ['content-type', ...supertokens_node_1.default.getAllCORSHeaders()],
        credentials: true,
    });
    app.useGlobalFilters(new auth_filter_1.SupertokensExceptionFilter());
    await app.listen(PORT);
}
;
bootstrap();
//# sourceMappingURL=main.js.map