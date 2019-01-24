import { AppHeader, AppSidebar, AppFooter } from './';

// 3rd party
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function App()
{
  return <>
    <AppHeader blogTitle="Geiler IPI Blog" />

    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">

          <div className="blog-post">
            <h2 className="blog-post-title">
              <a href="/">Blog Post Title</a>
            </h2>
            <a href="/" className="btn btn-link btn-sm">
              <FontAwesomeIcon icon="edit" />
            </a>
            <span className="blog-post-meta">2019-01-24</span>
            <div>
              <a href="/" className="badge badge-primary mr-1">Tag One</a>
              <a href="/" className="badge badge-primary mr-1">Tag Two</a>
              <a href="/" className="badge badge-primary mr-1">Tag Three</a>
            </div>
            <div>Blog Post Text</div>
          </div>

        </div>

        <AppSidebar />
      </div>
    </main>

    <AppFooter />
  </>;
};