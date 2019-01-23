import { BlogPost } from './';

export interface BlogApi
{
  getAllBlogPosts(): Promise<BlogPost[]>;
  getSingleBlogPost(id: number): Promise<BlogPost>;
  updateBlogPost(post: BlogPost): Promise<Response>;
  addBlogPost(post: BlogPost): Promise<Response>;
  getPostsByTags(tags: string[]): Promise<BlogPost[]>;
};