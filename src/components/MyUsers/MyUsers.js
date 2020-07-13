import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Groups from "./Groups";
function MyUsers() {
  const [groups, setState] = React.useState([]);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };
  useEffect(() => {
    const getGroups = async () => {
      let res = await axios.get("http://localhost:4000/groups", config);
      setState(res.data.data.groups);
    };
    getGroups();
  }, []);

  return (
    <div id="home-container">
      <Groups groups={groups} />
    </div>
  );
}

export default MyUsers;
