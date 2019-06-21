import React, { Suspense } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import routes from './routes';
import 'react-animated-slider/build/horizontal.css';
import "./styles/index.css";
import LoaddingPage from './components/LoaddingPage'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Human Gene</title>
      </Helmet>
      <Router>
        <Suspense fallback={<LoaddingPage />}>
          <Switch>
            {
              routes.map((route, index) => {
                return <Route key={`route-${index}`} path={route.path} exact component={route.component} />
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
