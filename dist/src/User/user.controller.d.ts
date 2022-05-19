import { createUserDTO } from "./createUserDTO";
import { UserService } from "./user.service";
import { userRO } from "./userRO";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(email: string): Promise<userRO>;
    register(createUserDto: createUserDTO): Promise<void>;
}
