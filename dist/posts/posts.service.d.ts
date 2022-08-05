import { PostsCreateDto } from './dto/posts-create.dto';
export declare class PostsService {
    private posts;
    create(body: PostsCreateDto): Promise<PostsCreateDto>;
    getAllPosts(): Promise<PostsCreateDto[]>;
}
