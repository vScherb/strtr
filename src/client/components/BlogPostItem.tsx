import { BlogPost } from '../types';

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface BlogPostItemProperties
{
  post: BlogPost;
};

export function BlogPostItem(props: BlogPostItemProperties)
{
  const { post } = props;

  return <div className="blog-post">
    <h2 className="blog-post-title">
      <a href="/">{post.title}</a>
    </h2>
    <a href="/" className="btn btn-link btn-sm">
      <FontAwesomeIcon icon="edit" />
    </a>
    <span className="blog-post-meta">{post.created}</span>
    <div>
      {post.tags.join(', ')}
    </div>
    <div>{post.content}</div>
  </div>;
};