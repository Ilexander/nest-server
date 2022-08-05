/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsCreateDto } from './dto/posts-create.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  findAll() {
    return this.postService.getAllPosts();
  }

  @Post('create')
  create(@Body() post: PostsCreateDto) {
    return this.postService.create(post);
  }
}
