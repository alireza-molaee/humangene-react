import React, { Suspense, useState } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import routes from './routes';
import 'react-animated-slider/build/horizontal.css';
import "./styles/index.css";
import LoaddingPage from './components/LoaddingPage'
import { ToastContainer } from 'react-toastify';
import LoginModal from './pages/LoginModal'
import RegisterModal from './pages/RegisterModal'
import 'react-toastify/dist/ReactToastify.css';
import I18n from './i18n';

function App() {

  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const lang = localStorage.getItem("lang") || 'fa';

  return (
    <I18n lang={lang}>
      <div className="App">
        <Helmet>
          <title>Human Gene</title>
        </Helmet>
        <Router>
          <Suspense fallback={<LoaddingPage />}>
            <Switch>
              {
                routes.map((route, index) => {
                  const RouteComponent = route.component;
                  return <Route key={`route-${index}`} path={route.path} exact render={routeProps => (
                    <RouteComponent {...routeProps} 
                      openLoginModal={() => {setShowLoginModal(true)}} 
                      openRegisterModal={() => {setShowRegisterModal(true)}}
                    />
                  )} />
                })
              }
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Router>
        <LoginModal show={showLoginModal} onClose={() => {setShowLoginModal(false)}} />
        <RegisterModal show={showRegisterModal} onClose={() => {setShowRegisterModal(false)}} />
        <ToastContainer />
      </div>
    </I18n>
  );
}

export default App;
