import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import User from "./User";
import moment from "moment";
import React, { useEffect, useContext } from "react";

function AddMeal(b) {
  const [foods, setFoods] = React.useState([]);
  const [addedFood, setAddedFood] = React.useState({ id: 0 });
  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };
  console.log(b);
  useEffect(() => {
    const getGroups = async () => {
      const url = `http://localhost:4000/foods`;
      let res = await axios.get(url, config);
      setFoods(res.data);
      console.log("EFFECT");
    };
    getGroups();
  }, []);
  const addMeal = () => {
    console.log("PROPFUN");
    console.log(addedFood.id);
    b.postData(addedFood.id);
  };

  const handleInputs = (e) => {
    console.log(e.target);

    setAddedFood({ ...addedFood, [e.target.name]: e.target.value });
  };

  return (
    <div id="home-container">
      <select name="id" onChange={handleInputs}>
        {foods.map((f) => (
          <option value={f.id} name="id">
            {f.name}{" "}
          </option>
        ))}
      </select>
      <div onClick={addMeal}>SEND</div>
    </div>
  );
}

export default AddMeal;
