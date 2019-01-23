import { BlogApi, BlogPost } from './types';

function wait(ms: number = 750)
{
  return new Promise(resolve =>
  {
    setTimeout(() =>
    {
      resolve();
    }, ms);
  });
};

export const api: BlogApi = {
  getAllBlogPosts(): Promise<BlogPost[]>
  {
    const keys = Object.keys(localStorage);
    const items = keys.map(key => JSON.parse(localStorage.getItem(key))).reverse();

    return wait(300).then(() => items);
  },
  getSingleBlogPost(id: number): Promise<BlogPost>
  {
    const item = JSON.parse(localStorage.getItem(id + ''));

    return wait(200).then(() => item);
  },
  updateBlogPost(post: BlogPost): Promise<Response>
  {
    localStorage.setItem(post.id + '', JSON.stringify(post));

    return wait(250).then(() => null);
  },

  addBlogPost(post: BlogPost): Promise<Response>
  {
    localStorage.setItem(post.id + '', JSON.stringify(post));

    return wait(500).then(() => null);
  },
  getPostsByTags(tags: string[]): Promise<BlogPost[]>
  {
    const allItems: BlogPost[] = Object
      .keys(localStorage)
      .map(key => JSON.parse(localStorage.getItem(key)));

    const filtered = allItems.filter(item =>
    {
      let result = true;

      for (const tag of tags)
      {
        result = result && item.tags.indexOf(tag) > -1;
      }

      return result;
    });

    return wait(400).then(() => filtered);
  }
};

export default api;