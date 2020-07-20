import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import User from './User'
import React, { useEffect, useContext } from "react";

function Users(p) {
  console.log(p);
  let groupId = useParams();

  // const { name } = p.data;
  // const { id, name } = p.data;
  const [users, setUsers] = React.useState([]);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };

  useEffect(() => {
    const getGroups = async () => {
      let res = await axios.get(
        `http://localhost:4000/users?groupId=${groupId.id}`,
        config
      );
      console.log(res.data.data);
      setUsers(res.data.data.users);
    };
    getGroups();
  }, []);

  // const callUsersByGroup = async (e) => {
  //   console.log(e.target.id);
  //   let res = await axios.get(
  //     `http://localhost:4000/users?groupId=${groupId}`,
  //     config
  //   );
  //   setUsers(res.data.data.users);
  // };

return <div id="home-container">{users.map(u => <User name={u.name} key={u.id} id={u.id}/>)}</div>;
}

export default Users;
