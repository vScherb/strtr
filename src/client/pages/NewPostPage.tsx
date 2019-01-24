import api from '../api';
import { BlogPost } from '../types';
import { EditPostForm } from '../components';

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface NewPostPageProperties extends RouteComponentProps<{}>
{
};

export function NewPostPage(props: NewPostPageProperties)
{
  return <EditPostForm onSaveButtonClick={async (state) =>
  {
    const tags = state.tagsTextboxValue
      .split(',')
      .map(x => x.trim())
      .filter(x => x.length > 0);

    const now = new Date();

    const post: BlogPost = {
      id: now.getTime(),
      title: state.titleTextboxValue.trim(),
      content: state.contentTextboxValue.trim(),
      tags,
      created: now
    };

    await api.addBlogPost(post);

    props.history.push('/blog/' + post.id);
  }} />;
}