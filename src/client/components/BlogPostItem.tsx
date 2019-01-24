import { BlogPost } from '../types';
import { ContentTagStrip } from './';

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as showdown from 'showdown';
import * as moment from 'moment';

const markdownConverter = new showdown.Converter();

export interface BlogPostItemProperties
{
  post: BlogPost;
};

export function BlogPostItem(props: BlogPostItemProperties)
{
  const { post } = props;
  const content = markdownConverter.makeHtml(post.content);

  return <div className="blog-post">
    <h2 className="blog-post-title">
      <a href="/">{post.title}</a>
    </h2>
    <a href="/" className="btn btn-link btn-sm">
      <FontAwesomeIcon icon="edit" />
    </a>
    <span className="blog-post-meta">{moment(post.created).format('LLLL')}</span>
    <ContentTagStrip tags={post.tags} />
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </div>;
};