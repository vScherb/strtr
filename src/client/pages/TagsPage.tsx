// 2nd party
import api from '../api';
import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

// 3rd party
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface TagsPageRouterProperties
{
  tags: string;
}

interface TagsPageProperties extends RouteComponentProps<TagsPageRouterProperties>
{
}

export interface TagsPageState
{
  displayedPosts: BlogPost[];
  loading: boolean;
};

export class TagsPage extends React.Component<TagsPageProperties, TagsPageState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      displayedPosts: [],
      loading: false
    };
  }

  async componentDidMount()
  {
    await this.reload();
  }

  async componentDidUpdate(prevProps: TagsPageProperties)
  {
    if (this.props.location !== prevProps.location)
    {
      await this.reload();
    }
  }

  private async reload()
  {
    this.setState({
      loading: true
    });

    const tags = this.props.match.params.tags.split(',').map(x => x.trim()).filter(x => x.length > 2);
    const posts = await api.getPostsByTags(tags);

    this.setState({
      loading: false
    });

    this.setState({
      displayedPosts: posts
    });
  }

  render()
  {
    let content = null;

    if (this.state.loading)
    {
      content = <h2>Loading</h2>;
    }
    else
    {
      content = this.state.displayedPosts.map((post, i) => <BlogPostItem key={i} post={post} />);
    }

    return <>
      {content}
    </>;
  }
};