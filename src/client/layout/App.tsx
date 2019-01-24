import { AppHeader, AppSidebar, AppFooter } from './';
import { IndexPage, SinglePostPage } from '../pages';

// 3rd party
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

export function App()
{
  return <>
    <AppHeader blogTitle="Geiler IPI Blog" />

    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">

          <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route exact path='/blog/:id' component={SinglePostPage} />
            <Route exact path='/new' render={() => <div>new page</div>} />
          </Switch>

        </div>

        <AppSidebar />
      </div>
    </main>

    <AppFooter />
  </>;
};