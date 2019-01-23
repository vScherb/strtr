// 2nd party
import { BlogPost } from '../types';
import api from '../api';
import { EditPostForm, EditPostFormState } from '../components';

// 3rd party
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
  blogPost?: BlogPost;
  loading: boolean;
};

export class EditPostPage extends React.Component<EditPostPageProperties, EditPostPageState>
{
  constructor(props: any)
  {
    super(props);

    this.state = {
      blogPost: null,
      loading: true
    };
  }

  componentDidMount()
  {
    this.init();
  }

  private async init()
  {
    const { id } = this.props.match.params;

    const blogPost = await api.getSingleBlogPost(parseInt(id));

    this.setState({
      blogPost,
      loading: false
    });
  }

  private async onSaveButtonClick(state: EditPostFormState)
  {
    const tags = state.tagsTextboxValue.split(',').map(x => x.trim()).filter(x => x.length > 0);

    const post: BlogPost = {
      ...this.state.blogPost,
      title: state.titleTextboxValue.trim(),
      content: state.contentTextboxValue.trim(),
      tags
    };

    await api.updateBlogPost(post);

    this.props.history.push('/blog/' + post.id);
  }

  render()
  {
    const { state } = this;
    let content = null;

    if (state.loading)
    {
      content = <h1>Loading</h1>;
    }
    else
    {
      const initialFormState: EditPostFormState = {
        titleTextboxValue: state.blogPost.title,
        contentTextboxValue: state.blogPost.content,
        tagsTextboxValue: state.blogPost.tags.join(', ')
      };

      content = <EditPostForm
        initialState={initialFormState}
        onSaveButtonClick={(state: EditPostFormState) =>
        {
          this.onSaveButtonClick(state);
        }}
      />;
    }

    return content;
  }
};