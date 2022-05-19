import { Prisma, User } from "@prisma/client";
import { PrismaService } from "../../prisma/prisma.service";
import { createUserDTO } from "./createUserDTO";
import { userRO } from "./userRO";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findUserByEmail(email: string): Promise<userRO>;
    user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null>;
    users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]>;
    createUser(data: createUserDTO): Promise<User>;
    saveUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User>;
    deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User>;
}
