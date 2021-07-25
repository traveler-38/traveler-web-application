import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/layouts/NavBar';
import Landing from './components/layouts/Landing';
// import NotFound from "./components/NotFound";
import DashBoard from './components/DashBoard';
import setAuthToken from './utils.js/setAuthToken';
import Login from './components/auth/Login';
import store from "./store";
import { loadUser } from './actions/auth';
import Register from "./components/auth/Register";


if(localStorage.token){
  setAuthToken.apply(localStorage.token);
}


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="" component={NotFound} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
