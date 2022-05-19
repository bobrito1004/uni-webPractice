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
exports.PostRO = void 0;
const swagger_1 = require("@nestjs/swagger");
class PostRO {
    constructor(id, title, content, pub) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.published = pub;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id',
        example: '1',
    }),
    __metadata("design:type", Number)
], PostRO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Title',
        example: 'post',
    }),
    __metadata("design:type", String)
], PostRO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Content',
        example: 'post',
    }),
    __metadata("design:type", String)
], PostRO.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Published',
        example: 'true',
    }),
    __metadata("design:type", Boolean)
], PostRO.prototype, "published", void 0);
exports.PostRO = PostRO;
//# sourceMappingURL=postRO.js.map