// 2nd party
import { BlogPost } from '../types';
import api from '../api';
import { EditPostForm } from '../components';

// 3rd party
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface NewPostPageRouterProperties
{
};

export interface NewPostPageProperties extends RouteComponentProps<NewPostPageRouterProperties>
{
};

export class NewPostPage extends React.Component<NewPostPageProperties, {}>
{
  constructor(props: any)
  {
    super(props);
  }

  render()
  {
    return <EditPostForm
      onSaveButtonClick={async (state) =>
      {
        if (state.titleTextboxValue.trim().length === 0 || state.contentTextboxValue.trim().length === 0)
        {
          return;
        }

        const now = new Date();

        const tags = state.tagsTextboxValue.split(',').map(x => x.trim()).filter(x => x.length > 0);

        const post: BlogPost = {
          id: now.getTime(),
          title: state.titleTextboxValue.trim(),
          content: state.contentTextboxValue.trim(),
          tags,
          created: now
        };

        await api.addBlogPost(post);

        this.props.history.push('/blog/' + post.id);
      }}
    />;
  }
};