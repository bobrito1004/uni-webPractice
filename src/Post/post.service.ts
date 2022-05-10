import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { PostNotFoundException } from "./exceptions/postNotFound.exception";
import { CreatePostDto } from "./dto/createPost.dto";
import { PostRO } from "./postRO";
import { Post, Prisma } from "@prisma/client";
@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {
  }

  async Post(
    postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async getPosts(): Promise<Array<PostRO>> {
    return this.prisma.post
      .findMany()
      .then((x) => x.map((t) => new PostRO(t.id, t.title, t.content, t.published)));
  }

  async getPostById(id: number): Promise<Array<PostRO>> {
    const predicate: Prisma.PostWhereInput = {
      authorId: id
    };

    const posts = await this.prisma.post.findMany({
      where: predicate
    });

    return posts.map((t) => new PostRO(t.id, t.title, t.content, t.published));
  }

  async createPost(
    data: CreatePostDto,
    userId: number
  ): Promise<Post> {
    const where: Prisma.UserWhereUniqueInput = {
      id: userId
    };

    const post_inf: Prisma.PostCreateInput = {
      title: data.title,
      content: data.content,
      author: {
        connect: where
      }
    };

    return await this.savePost(post_inf);

  }

  savePost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data
    });
  }

  async deletePost(postId: number) {
    const where: Prisma.PostWhereUniqueInput = {
      id: postId
    };

    await this.prisma.post.delete({
      where
    });
  }
}
