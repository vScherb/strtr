// 2nd party
import { BlogPost } from '../types';
import { ContentTagStrip } from './';

// 3rd party
import * as React from 'react';
import { Link } from 'react-router-dom';

import * as showdown from 'showdown';
import * as moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// globals
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
      <Link to={`/blog/${post.id}`}>{post.title}</Link>
    </h2>
    <Link to={`/blog/${post.id}/edit`} className="btn btn-link btn-sm">
      <FontAwesomeIcon icon="edit" />
    </Link>
    <span className="blog-post-meta">{moment(post.created).format('LLLL')}</span>
    <ContentTagStrip tags={post.tags} />
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </div>;
};