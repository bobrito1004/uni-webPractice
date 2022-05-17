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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const postRO_1 = require("./postRO");
let PostService = class PostService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async Post(postWhereUniqueInput) {
        return this.prisma.post.findUnique({
            where: postWhereUniqueInput,
        });
    }
    async posts(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.post.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async getPosts() {
        return this.prisma.post
            .findMany()
            .then((x) => x.map((t) => new postRO_1.PostRO(t.id, t.title, t.content, t.published)));
    }
    async getPostById(id) {
        const predicate = {
            authorId: id
        };
        const posts = await this.prisma.post.findMany({
            where: predicate
        });
        return posts.map((t) => new postRO_1.PostRO(t.id, t.title, t.content, t.published));
    }
    async createPost(data, userId) {
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
        return await this.savePost(post_inf);
    }
    savePost(data) {
        return this.prisma.post.create({
            data
        });
    }
    async deletePost(postId) {
        const where = {
            id: postId
        };
        await this.prisma.post.delete({
            where
        });
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map