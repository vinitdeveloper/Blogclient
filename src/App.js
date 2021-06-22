import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components'
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Post from './components/Post'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';


function App() {

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {

    const token = getToken();
    if (token) {
      setUserSession(true,token);
      setAuthLoading(false);
    }else{
      removeUserSession();
      setAuthLoading(false);
    }

  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path='/' component={Index} />
            <PublicRoute path='/signin' component={Signin} />
            <PublicRoute path='/signup' component={Signup} />

            {/* <PrivateRoute authed={isLoggedIn} path='/dashboard' component={Dashboard} />
            <PrivateRoute authed={isLoggedIn} path='/profile' component={Profile} />
            <PrivateRoute authed={isLoggedIn} path='/post' component={Post} />
            <PrivateRoute authed={isLoggedIn} path='/add-post' component={AddPost} />
            <PrivateRoute authed={isLoggedIn} path='/edit-post/:postId' component={EditPost} /> */}

            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/post' component={Post} />
            <PrivateRoute path='/add-post' component={AddPost} />
            <PrivateRoute path='/edit-post/:postId' component={EditPost} />

            <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
