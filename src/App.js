import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AllQuote from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';

import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route path='/quotes' exact>
            <AllQuote />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
