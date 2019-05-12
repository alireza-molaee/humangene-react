import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import routes from './routes';
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Human Gene</title>
      </Helmet>
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {
              routes.map(route => {
                return <Route path={route.path} exact component={route.component} />
              })
            }
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
