import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import React, { useEffect, useContext } from "react";

function User(p) {
  console.log(p);

  return (
    <div id="home-container">
      {/* <Route path={`/groups/${p.id}`} component={Users} id={p.id} cd /> */}
      <Link
        to={{
          pathname: `/daily/${p.id}`,
        }}
      >
        <div id={p.id}>{p.name}</div>
      </Link>
      ;
    </div>
  );
}

export default User;
