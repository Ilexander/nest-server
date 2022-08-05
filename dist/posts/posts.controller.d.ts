import { PostsCreateDto } from './dto/posts-create.dto';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    findAll(): Promise<PostsCreateDto[]>;
    create(post: PostsCreateDto): Promise<PostsCreateDto>;
}
