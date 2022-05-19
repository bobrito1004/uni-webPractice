import { PrismaService } from "../../prisma/prisma.service";
import { CreatePostDto } from "./dto/createPost.dto";
import { PostRO } from "./postRO";
import { Post, Prisma } from "@prisma/client";
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    Post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null>;
    posts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        where?: Prisma.PostWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]>;
    getPosts(): Promise<Array<PostRO>>;
    getPostById(id: number): Promise<Array<PostRO>>;
    createPost(data: CreatePostDto, userId: number): Promise<Post>;
    savePost(data: Prisma.PostCreateInput): Promise<Post>;
    deletePost(postId: number): Promise<void>;
}
