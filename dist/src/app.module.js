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
const fetch_module_1 = require("./fetch/fetch.module");
const chat_module_1 = require("./chat/chat.module");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), toDoList_module_1.ToDoListModule, post_module_1.PostModule, user_module_1.UserModule, fetch_module_1.FetchModule, chat_module_1.ChatModule,
            auth_module_1.AuthModule.forRoot({
                connectionURI: "https://2f471231da9211ecb03a317579e2e21c-eu-west-1.aws.supertokens.io:3567",
                apiKey: "b2grDWyJMXXZxNjbzUYe-Ch2ILSjiv",
                appInfo: {
                    // Learn more about this on https://supertokens.com/docs/emailpassword/appinfo
                    appName: "itmo282768",
                    apiDomain: "http://localhost:12345",
                    websiteDomain: "http://localhost:12345",
                    apiBasePath: "/auth",
                    websiteBasePath: "/auth"
                }
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map