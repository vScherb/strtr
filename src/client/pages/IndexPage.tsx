import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

import * as React from 'react';

export class IndexPage extends React.Component<{}, {}>
{
  constructor(props: any)
  {
    super(props);
  }

  render()
  {
    const dataSource: BlogPost[] = [
      {
        id: 123,
        title: 'Das ist mein Title',
        content: 'Das ist mein Content',
        created: new Date(),
        tags: ['sharepoint', 'javascript']
      }
    ];

    return <div>
      {dataSource.map((post, i) => <BlogPostItem key={i} post={post} />)}
    </div>;
  }
};