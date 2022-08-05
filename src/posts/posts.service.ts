/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PostsCreateDto } from './dto/posts-create.dto';

@Injectable()
export class PostsService {
  private posts: PostsCreateDto[] = [];

  async create(body: PostsCreateDto) {
    this.posts.push(Object.assign(body, { id: Date.now() }));
    return body;
  }

  async getAllPosts() {
    return this.posts;
  }
}
