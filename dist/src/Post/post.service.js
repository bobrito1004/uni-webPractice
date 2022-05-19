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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const postRO_1 = require("./postRO");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    Post(postWhereUniqueInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.post.findUnique({
                where: postWhereUniqueInput,
            });
        });
    }
    posts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { skip, take, cursor, where, orderBy } = params;
            return this.prisma.post.findMany({
                skip,
                take,
                cursor,
                where,
                orderBy,
            });
        });
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.post
                .findMany()
                .then((x) => x.map((t) => new postRO_1.PostRO(t.id, t.title, t.content, t.published)));
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const predicate = {
                authorId: id
            };
            const posts = yield this.prisma.post.findMany({
                where: predicate
            });
            return posts.map((t) => new postRO_1.PostRO(t.id, t.title, t.content, t.published));
        });
    }
    createPost(data, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {
                id: userId
            };
            const post_inf = {
                title: data.title,
                content: data.content,
                author: {
                    connect: where
                }
            };
            return yield this.savePost(post_inf);
        });
    }
    savePost(data) {
        return this.prisma.post.create({
            data
        });
    }
    deletePost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {
                id: postId
            };
            yield this.prisma.post.delete({
                where
            });
        });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map