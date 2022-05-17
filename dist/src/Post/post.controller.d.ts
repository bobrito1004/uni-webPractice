import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { FindOneParams } from '../utils/findOneParams';
import { PostRO } from "./postRO";
export default class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPosts(): Promise<Array<PostRO>>;
    getPostById({ id }: FindOneParams): Promise<PostRO[]>;
    post(post: CreatePostDto, userId: number): Promise<import(".prisma/client").Post>;
    deletePost(postId: number): Promise<void>;
}
