import api from '../api';
import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface SinglePostPageRouterProperties
{
  id: string;
};

export interface SinglePostPageProperties extends RouteComponentProps<SinglePostPageRouterProperties>
{
};

export interface SinglePostPageState
{
  loading: boolean;
  post?: BlogPost;
};

export class SinglePostPage extends React.Component<SinglePostPageProperties, SinglePostPageState>
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
        content = <BlogPostItem post={state.post} />;
      }
    }

    return <div>
      {content}
    </div>;
  }
};