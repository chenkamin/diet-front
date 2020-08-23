import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./components/login/SignUp";
import MyUsers from "./components/MyUsers/MyUsers";
import MyDay from "./components/MyData/MyDay";
import Users from "./components/MyUsers/Users";
import User from "./components/MyUsers/Users";
import Details from "./components/MyUsers/Details";
import Menu from "./components/MyUsers/Menu";
import FoodList from "./components/MyUsers/FoodList";

import Login from "./components/login/Login";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <div className="nav-bar"> */}
      {/* <Link to="/"><div className={this.state.active === "Table"? "active head": "head"}id="Table" onClick={this.changeActive}>Clients</div></Link> */}
      {/* <Link to="/Crud"><div className={this.state.active === "Actions"? "active head": "head"}  id="Actions" onClick={this.changeActive}>Actions</div></Link> */}
      {/* <Link to="/Analytics"><div className={this.state.active === "Analytics"? "active head": "head"} id="Analytics" onClick={this.changeActive}>Analytics</div></Link> */}
      <div></div>
      {/* <Link to="/"><div className={this.state.head? "head-show":"head-of"} >Hello, {this.state.name}</div></Link> */}

      {/* </div> */}
      {/* <Route path="/" exact render={() => <Table   />} /> */}
      {/* <Route path="/Crud" exact render={() => <Crud   />} /> */}
      <Route path="/" exact render={() => <Login />} />
      <Route path="/SignUp" exact render={() => <SignUp />} />
      <Route path="/Menu" exact render={() => <Menu />} />
      <Route path="/MyUsers" exact render={() => <MyUsers />} />
      <Route path="/MyDay" exact render={() => <MyDay />} />
      <Route path="/FoodList" exact render={() => <FoodList />} />

      <Route path="/groups/:id" exact render={() => <Users />} />
      <Route path="/users/:id" exact render={() => <User />} />
      <Route path="/daily/:id" exact render={() => <Details />} />
    </Router>
  );
}

export default App;
