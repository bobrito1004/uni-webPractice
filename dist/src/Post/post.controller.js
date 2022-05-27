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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const createPost_dto_1 = require("./dto/createPost.dto");
const findOneParams_1 = require("../utils/findOneParams");
const postRO_1 = require("./postRO");
const swagger_1 = require("@nestjs/swagger");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.postService.getPosts();
        });
    }
    getPostById({ id }) {
        return this.postService.getPostById(Number(id));
    }
    post(post, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.postService.createPost(post, userId);
        });
    }
    deleteClub(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postService.deletePost(postId);
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get all posts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'ok',
        type: [postRO_1.PostRO]
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'no posts'
    }),
    (0, common_1.Get)('all'),
    openapi.ApiResponse({ status: 200, type: [require("./postRO").PostRO] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'get post by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'post found' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: [require("./postRO").PostRO] }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_1.FindOneParams]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'post a post' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "post's been posted" }),
    (0, swagger_1.ApiParam)({ name: 'title', type: 'string' }),
    (0, swagger_1.ApiParam)({ name: 'content', type: 'string' }),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('PostNumber', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPost_dto_1.CreatePostDto, Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "post", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Delete post',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The post has been successfully deleted.',
    }),
    (0, common_1.Delete)('delete'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deleteClub", null);
PostController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('post'),
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map