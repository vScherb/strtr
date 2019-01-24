import { AppHeader } from './';

// 3rd party
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function App()
{
  return <>
    <AppHeader />

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

        <aside className="col-md-4 blog-sidebar mt-3">
          <div className="p-3 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>

          <div className="p-3">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li><a href="#">March 2014</a></li>
              <li><a href="#">February 2014</a></li>
              <li><a href="#">January 2014</a></li>
              <li><a href="#">December 2013</a></li>
              <li><a href="#">November 2013</a></li>
              <li><a href="#">October 2013</a></li>
              <li><a href="#">September 2013</a></li>
              <li><a href="#">August 2013</a></li>
              <li><a href="#">July 2013</a></li>
              <li><a href="#">June 2013</a></li>
              <li><a href="#">May 2013</a></li>
              <li><a href="#">April 2013</a></li>
            </ol>
          </div>

          <div className="p-3">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </aside>
      </div>
    </main>

    <footer className="mt-auto py-3 blog-footer">
      <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  </>;
};