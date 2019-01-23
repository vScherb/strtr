import { BlogApi, BlogPost } from './types';

const api: BlogApi = {
  getAllBlogPosts(): Promise<BlogPost[]>
  {
    return fetch('/ajax/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  },
  getSingleBlogPost(id: number): Promise<BlogPost>
  {
    return fetch('/ajax/posts/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  },

  addBlogPost(post: BlogPost): Promise<Response>
  {
    return fetch('/ajax/posts', {
      method: 'PUT',
      body: JSON.stringify({
        post
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  updateBlogPost(post: BlogPost): Promise<Response>
  {
    return fetch('/ajax/posts/' + post.id, {
      method: 'POST',
      body: JSON.stringify({
        post
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  getPostsByTags(tags: string[]): Promise<BlogPost[]>
  {
    return fetch('/ajax/posts/by-tags', {
      method: 'POST',
      body: JSON.stringify({
        tags
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
};

export default api;