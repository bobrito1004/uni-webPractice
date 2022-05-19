"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const supertokens_node_1 = require("supertokens-node");
const express_1 = require("supertokens-node/recipe/session/framework/express");
let AuthGuard = class AuthGuard {
    canActivate(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = context.switchToHttp();
            let err = undefined;
            const resp = ctx.getResponse();
            // You can create an optional version of this by passing {sessionRequired: false} to verifySession
            yield (0, express_1.verifySession)()(ctx.getRequest(), resp, (res) => {
                err = res;
            });
            if (resp.headersSent) {
                throw new supertokens_node_1.Error({
                    message: "RESPONSE_SENT",
                    type: "RESPONSE_SENT",
                });
            }
            if (err) {
                throw err;
            }
            return true;
        });
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map