"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfigService = void 0;
const common_1 = require("@nestjs/common");
var parse = require("pg-connection-string").parse;
var config = parse('postgres://nebozenazyxeom:f0f5cc9d1893701334a5e9392aae8652214f17c6ae57e579e971c65873579ba3@ec2-34-242-84-130.eu-west-1.compute.amazonaws.com:5432/d7fbk5vas2234n');
let TypeOrmConfigService = class TypeOrmConfigService {
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            url: 'postgres://nebozenazyxeom:f0f5cc9d1893701334a5e9392aae8652214f17c6ae57e579e971c65873579ba3@ec2-34-242' +
                '-84-130.eu-west-1.compute.amazonaws.com:5432/d7fbk5vas2234n',
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/*.{ts,js'],
            migrationsTableName: 'typeorm_migrations',
            synchronize: true,
            "ssl": true,
            "extra": {
                "ssl": {
                    "rejectUnauthorized": false
                }
            }
        };
    }
};
TypeOrmConfigService = __decorate([
    (0, common_1.Injectable)()
], TypeOrmConfigService);
exports.TypeOrmConfigService = TypeOrmConfigService;
//# sourceMappingURL=typeorm.service.js.map