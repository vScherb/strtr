import api from '../api';
import { BlogPost } from '../types';
import { EditPostForm, EditPostFormState } from '../components';

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface EditPostPageRouterProperties
{
  id: string;
};

export interface EditPostPageProperties extends RouteComponentProps<EditPostPageRouterProperties>
{
};

export interface EditPostPageState
{
  loading: boolean;
  post?: BlogPost;
};

export class EditPostPage extends React.Component<EditPostPageProperties, EditPostPageState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      loading: false,
      post: null
    };
  }

  componentDidMount()
  {
    this.init();
  }

  async init()
  {
    const { id } = this.props.match.params;

    this.setState({
      loading: true
    });

    const post = await api.getSingleBlogPost(parseInt(id));

    this.setState({
      loading: false,
      post
    });
  }

  render()
  {
    const { state } = this;
    let content = null;

    if (state.loading)
    {
      content = <h1>Loading posts...</h1>;
    }
    else
    {
      if (state.post == null)
      {
        content = <h1>404 - Post not found.</h1>;
      }
      else
      {
        const initialState: EditPostFormState = {
          titleTextboxValue: state.post.title,
          contentTextboxValue: state.post.content,
          tagsTextboxValue: state.post.tags.join(', ')
        };

        content = <EditPostForm
          initialState={initialState}
          onSaveButtonClick={async (state) => { console.log(state); }} />;
      }
    }

    return <div>
      {content}
    </div>;
  }
};