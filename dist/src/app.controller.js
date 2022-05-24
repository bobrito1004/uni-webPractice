"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_1 = require("firebase/compat/app");
require("firebase/compat/auth");
require("firebase/compat/firestore");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
        this.signed_in = false;
        this.app = app_1.default.initializeApp({
            apiKey: process.env.API_KEY
        });
    }
    index() {
        return {
            signed_in: this.signed_in,
            user_email: this.user_email,
            ServerResponseTime: this.appService.getServerResponseTime()
        };
    }
    getTest() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    getLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)("index"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('register'),
    (0, common_1.Render)('register'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTest", null);
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.Render)('login'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getLogin", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseInterceptors)(app_service_1.TimeInterceptor),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map