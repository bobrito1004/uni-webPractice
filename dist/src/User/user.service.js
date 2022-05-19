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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const userRO_1 = require("./userRO");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const predicate = {
                email: email,
            };
            const user = yield this.prisma.user.findUnique({
                where: predicate,
            });
            if (user == null) {
                throw new common_1.HttpException('User not found', 400);
            }
            return new userRO_1.userRO(user.id, user.email, user.name);
        });
    }
    user(userWhereUniqueInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findUnique({
                where: userWhereUniqueInput,
            });
        });
    }
    users(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { skip, take, cursor, where, orderBy } = params;
            return this.prisma.user.findMany({
                skip,
                take,
                cursor,
                where,
                orderBy,
            });
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_inf = {
                email: data.email,
                name: data.name,
            };
            return yield this.saveUser(user_inf);
        });
    }
    saveUser(data) {
        return this.prisma.user.create({
            data,
        });
    }
    updateUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { where, data } = params;
            return this.prisma.user.update({
                data,
                where,
            });
        });
    }
    deleteUser(where) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.delete({
                where,
            });
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map