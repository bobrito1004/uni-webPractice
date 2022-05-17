"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const toDoList_module_1 = require("./toDoList/toDoList.module");
const post_module_1 = require("./Post/post.module");
const user_module_1 = require("./User/user.module");
const auth_module_1 = require("./auth/auth.module");
const chat_module_1 = require("./chat/chat.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [toDoList_module_1.ToDoListModule, post_module_1.PostModule, user_module_1.UserModule, chat_module_1.ChatModule,
            auth_module_1.AuthModule.forRoot({
                connectionURI: "https://02a49211d55c11ecb6281b2b0cb888eb-eu-west-1.aws.supertokens.io:3572",
                apiKey: "OwfeyIlFNDaFrl2r4kKoPhcWEWaFRt",
                appInfo: {
                    appName: "itmo282768",
                    apiDomain: "https://localhost:766",
                    websiteDomain: "https://localhost:766",
                    apiBasePath: "/api",
                    websiteBasePath: "/auth"
                },
            })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map