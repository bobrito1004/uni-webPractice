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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const fetch_service_1 = require("./fetch.service");
let FetchController = class FetchController {
    constructor(FetchService) {
        this.FetchService = FetchService;
    }
    fetch() { }
};
__decorate([
    (0, common_1.Get)('fetch'),
    (0, common_1.Render)('fetch'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FetchController.prototype, "fetch", null);
FetchController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [fetch_service_1.FetchService])
], FetchController);
exports.FetchController = FetchController;
//# sourceMappingURL=fetch.controller.js.map