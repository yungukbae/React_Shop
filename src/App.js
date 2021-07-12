import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import LoginForm from './component/LoginForm'
import RegisterForm from './component/RegisterForm'
import RandingPage from './component/RandingPage'
import Auth from './hoc/Auth'
import Navbar from './component/Navbar'
import CreateProject from './component/CreateProject'
import ItemForm from './component/ItemForm'
import AddData from './component/AddData'
import ItemDetail from "./component/ItemDetail";
import Cart from './component/Cart'
import Profile from './component/Profile'

function App() {
  return (
    <div>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Auth(RandingPage,null)} />
          <Route exact path="/item" component={Auth(ItemForm,null)}/>
          <Route exact path="/item/:id" component={Auth(ItemDetail,null)}/>

          <Route exact path="/login" component={Auth(LoginForm,false)} />
          <Route exact path="/register" component={Auth(RegisterForm,false)} />
          
          <Route exact path="/create" component={Auth(CreateProject,true)}/>
          <Route exact path="/adddata" component={Auth(AddData,true)}/>
          <Route exact path="/cart" component={Auth(Cart,true)}/>
          <Route exact path="/profile" component={Auth(Profile,true)}/>

        </Switch>
    </Router>
      </div>
  );
}

export default App;