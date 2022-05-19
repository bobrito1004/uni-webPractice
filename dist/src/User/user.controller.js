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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createUserDTO_1 = require("./createUserDTO");
const user_service_1 = require("./user.service");
const userRO_1 = require("./userRO");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUser(email) {
        return this.userService.findUserByEmail(email);
    }
    register(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userService.createUser(createUserDto);
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get user by email',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The user was found.',
        type: userRO_1.userRO,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: "The user wasn't found.",
    }),
    (0, common_1.Get)(':email'),
    openapi.ApiResponse({ status: 200, type: require("./userRO").userRO }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Register user',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The user has been successfully created.',
    }),
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDTO_1.createUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map