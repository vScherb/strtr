import api from '../api';
import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

import * as React from 'react';

export interface IndexPageState
{
  loading: boolean;
  displayedPosts: BlogPost[];
};

export class IndexPage extends React.Component<{}, IndexPageState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      loading: false,
      displayedPosts: []
    };
  }

  componentDidMount()
  {
    this.init();
  }

  async init()
  {
    this.setState({
      loading: true
    });

    const posts = await api.getAllBlogPosts();

    this.setState({
      loading: false,
      displayedPosts: posts
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
      if (state.displayedPosts.length === 0)
      {
        content = <h1>No posts found.</h1>;
      }
      else
      {
        content = state.displayedPosts.map((post, i) => <BlogPostItem
          key={i}
          post={post} />);
      }
    }

    return <div>
      {content}
    </div>;
  }
};