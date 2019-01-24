import { AppHeader, AppSidebar, AppFooter } from './';

import { BlogPostItem } from '../components';

// 3rd party
import * as React from 'react';

export function App()
{
  return <>
    <AppHeader blogTitle="Geiler IPI Blog" />

    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">

          <BlogPostItem />

        </div>

        <AppSidebar />
      </div>
    </main>

    <AppFooter />
  </>;
};