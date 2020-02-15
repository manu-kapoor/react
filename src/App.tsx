import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import UsersView from './components/User/UsersView';
import NotFoundPage from './common/NotFoundPage';
import UserView from './components/User/UserView';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={UsersView} />
      <Route path="/user/:id" component={UserView} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default App;
