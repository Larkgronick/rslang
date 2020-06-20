import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import SignIn from '../components/Registration/SignIn';
import SignUp from '../components/Registration/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <div><Link to='/home'>Home</Link></div>
        <div><Link to='/signin'>Sign In</Link></div>
        <div><Link to='/signup'>Sign Up</Link></div>
        <Switch>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/signin'>
            <SignIn/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;


