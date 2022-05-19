"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
require("reflect-metadata");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../prisma/prisma.service");
const common_1 = require("@nestjs/common");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
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
        yield app.listen(PORT);
    });
}
;
bootstrap();
//# sourceMappingURL=main.js.map