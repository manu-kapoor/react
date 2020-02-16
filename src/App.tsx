import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import UsersView from './components/User/UsersView';
import NotFoundPage from './common/NotFoundPage';
import UserView from './components/User/UserView';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserAdd from './components/User/UserAdd';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={UsersView} />
          <Route path="/users/add" component={UserAdd} />
          <Route path="/users/:id" component={UserView} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </>
  )
}

export default App;
