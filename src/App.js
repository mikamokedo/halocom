import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PostDetail from './components/PostDetail';
import Signup from './pages/SignUp';
function App() {
  return (
    <Router>
    <div className="App">
      <div className="container">
          <Header />
      <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/login" component={Login}/>
          <Route exact={true} path="/signup" component={Signup}/>
          <Route exact={true} path="/item=:uuid" component={PostDetail}/>
          <Route exact={true} path="" component={Notfound}/>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
