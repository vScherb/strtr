// 2nd party
import api from '../api';
import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

// 3rd party
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface SinglePostPageRouterProperties
{
  id: string;
}

interface SinglePostPageProperties extends RouteComponentProps<SinglePostPageRouterProperties>
{
}

export interface SinglePostPageState
{
  post?: BlogPost;
  loading: boolean;
};

export class SinglePostPage extends React.Component<SinglePostPageProperties, SinglePostPageState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      post: null,
      loading: false
    };
  }

  componentDidMount()
  {
    this.init();
  }

  private async init()
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
    let content = null;

    if (this.state.loading)
    {
      content = <h1>Loading post...</h1>;
    }
    else if (this.state.post != null)
    {
      const { post } = this.state;

      content = <BlogPostItem post={post} />;
    }
    else
    {
      content = <h1>404 - Post not found</h1>;
    }

    return content;
  }
};