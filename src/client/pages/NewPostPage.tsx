import { EditPostForm } from '../components';

import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface NewPostPageProperties extends RouteComponentProps<{}>
{
};

export function NewPostPage(props: NewPostPageProperties)
{
  return <EditPostForm />
}