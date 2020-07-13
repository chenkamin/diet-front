import axios from "axios";
import React, { useEffect } from "react";
import Users from "./Users";
import Group from "./Group";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Groups(p) {
  console.log(p.groups);
  const groups = p.groups;

//   const [groups, setUsers] = React.useState([]);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };

  //   const callUsersByGroup = async (e) => {
  //     console.log(e.target.id);
  //     let res = await axios.get(
  //       `http://localhost:4000/users?groupId=${e.target.id}`,
  //       config
  //     );
  //     setUsers(res.data.data.users);

  //   };
  //   {/* <div id={id} onClick={callUsersByGroup}> */}

  return (
    <div>
      {groups.map((m) => (
        <Group name={m.name} id={m.id} />
      ))}
    </div>
  );
}

export default Groups;
