// 2nd party
import { AppHeader, AppFooter, AppSidebar } from './';
import { IndexPage, NewPostPage, SinglePostPage, EditPostPage, TagsPage } from '../pages';

// 3rd party
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

export function App()
{
  return <>
    <AppHeader />

    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">
          <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route exact path='/new' component={NewPostPage} />
            <Route exact path='/blog/:id' component={SinglePostPage} />
            <Route exact path='/blog/:id/edit' component={EditPostPage} />
            <Route exact path='/tags/:tags' component={TagsPage} />
          </Switch>
        </div>

        <AppSidebar />
      </div>
    </main>

    <AppFooter />
  </>;
};