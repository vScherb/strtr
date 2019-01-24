import api from '../api';
import { BlogPost } from '../types';
import { BlogPostItem } from '../components';

import * as React from 'react';

export class IndexPage extends React.Component<{}, {}>
{
  constructor(props: any)
  {
    super(props);

    this.init();
  }

  async init()
  {
    const dataSource: BlogPost[] = [
      {
        id: 123,
        title: 'Das ist mein Title',
        content: '*Das* ist mein **Content**',
        created: new Date(),
        tags: ['sharepoint', 'javascript']
      },
      {
        id: 456,
        title: 'Mein zweiter Post hier',
        content: '## Markdown rockt die Huette',
        created: new Date(),
        tags: ['sharepoint', 'javascript', 'foo', 'bar']
      }
    ];

    for (const post of dataSource)
    {
      await api.addBlogPost(post);
    }

    console.log(await api.getAllBlogPosts());
  }

  render()
  {


    return <div>
      {/* {dataSource.map((post, i) => <BlogPostItem key={i} post={post} />)} */}
    </div>;
  }
};