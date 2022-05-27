import {
  Body,
  Controller,
  Delete,
  Get,
  Param, ParseIntPipe,
  Patch,
  Post, Query
} from "@nestjs/common";
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPost.dto';
import { FindOneParams } from '../utils/findOneParams';
import {PostRO} from "./postRO";
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiBearerAuth()
@ApiTags('post')
@Controller('post')
export default class PostController {
  constructor(private readonly postService: PostService) {
  }
  @ApiOperation({summary:'get all posts'})
  @ApiResponse({
    status: 200,
    description: 'ok',
    type: [PostRO]
  })
  @ApiResponse({
    status: 400,
    description:'no posts'
  })
  @Get('all')
  async getPosts(): Promise<Array<PostRO>> {
    return this.postService.getPosts();
  }

  @ApiOperation({summary:'get post by id'})
  @ApiResponse({status: 200, description:'post found'})
  @ApiParam(
    { name: 'id', type: 'number' }
  )
  @Get(':id')
  getPostById(@Param() { id }: FindOneParams) {
    return this.postService.getPostById(Number(id));
  }

  @ApiOperation({summary:'post a post'})
  @ApiResponse({status: 201, description:"post's been posted"})
  @ApiParam(
    { name: 'title', type: 'string' }
  )
  @ApiParam(
    { name: 'content', type: 'string' }
  )
  @Post('create')
  async post(@Body() post: CreatePostDto,
             @Query('PostNumber', ParseIntPipe) userId: number){
    return this.postService.createPost(post, userId);
  }
  @ApiOperation({
    summary: 'Delete post',
  })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully deleted.',
  })
  @Delete('delete')
  async deleteClub(@Query('id', ParseIntPipe) postId: number) {
    await this.postService.deletePost(postId);
  }
}