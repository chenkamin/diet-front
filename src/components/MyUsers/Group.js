import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Groups from "./Groups";
import Users from "./Users";

function Group(p) {
  //   const { name, id } = p.data;

  return (
    <div id="home-container">
      {/* <Route path={`/groups/${p.id}`} component={Users} id={p.id} cd /> */}
      <Link to={{
    pathname: `/groups/${p.id}`,
    search: `${p.id}`,
    state: { fromDashboard: true }
  }}>
        <div id={p.id}>{p.name}</div>
      </Link>
      ;
    </div>
  );
}

// {`/groups/${p.id}`} id={p.id}
export default Group;

// // <Router>
// // <Route
// //   path="/groups"
// //   exact
// //   render={({ match }) => <Groups match={match} data={groups} />}
// // />
// // </Router>
// {/* <Route
//   path="/movies/:id"
//   exact
//   render={({ match }) => <MovieDetail match={match} data={this.state} />} */}
// // />;
// {/* <Route exact path="/" render={() => ( */}
//  loggedIn ? (
//  <Redirect to="/dashboard"/>
//  ) : (
//  <PublicHomePage/>
//  )
//  )}/>
