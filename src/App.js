import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Profile from './components/profile/profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact>
            <SignUp />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Profile'>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
