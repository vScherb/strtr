import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export interface AppHeaderProperties
{
  blogTitle: string;
};

export function AppHeader(props: AppHeaderProperties)
{
  return <>
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
          </div>
          <div className="col-4 text-center">
            <Link to="/" className="blog-header-logo text-dark">{props.blogTitle}</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link to="/new" className="btn btn-sm btn-success">
              <FontAwesomeIcon icon="plus" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  </>;
};