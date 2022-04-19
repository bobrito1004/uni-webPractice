"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
require("reflect-metadata");
var parse = require("pg-connection-string").parse;
var config = parse("postgres://rcyzviqygulnvu:ca3cccbde1fe44e52b10424997be57c784467e1ddca87237ff346ad9c48b0245@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/delc52h90kmsaa");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "/public"));
    app.setBaseViewsDir((0, path_1.join)(__dirname, "..", "/views"));
    app.setViewEngine("pug");
    const PORT = process.env.PORT || 12345;
    await app.listen(PORT);
}
;
bootstrap();
//# sourceMappingURL=main.js.map