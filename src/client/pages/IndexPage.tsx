// 2nd party
import api from '../api';
import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

// 3rd party
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IndexPageState
{
  displayedBlogPosts: BlogPost[];
  loading: boolean;
};

export class IndexPage extends React.Component<{}, IndexPageState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      displayedBlogPosts: [],
      loading: false
    };
  }

  componentDidMount()
  {
    this.init();
  }

  private async init()
  {
    this.setState({
      loading: true
    });

    const posts = await api.getAllBlogPosts();

    this.setState({
      loading: false,
      displayedBlogPosts: posts
    });
  }

  render()
  {
    let content = null;

    if (this.state.loading)
    {
      content = <h1>loading</h1>
    }
    else
    {
      if (this.state.displayedBlogPosts.length === 0)
      {
        content = <h1>No items found. Go <Link to='new'>Create some</Link>.</h1>;
      }
      else
      {
        content = this.state.displayedBlogPosts.map((post, i) => <BlogPostItem
          key={i}
          post={post}
        />);
      }
    }

    return content;
  }
};