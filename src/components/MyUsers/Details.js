import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AddMeal from "./AddMeal";

import moment from "moment";
import React, { useEffect, useContext } from "react";

function Daily(p) {
  console.log(p);
  let userId = useParams();
  console.log(userId);

  const [meals, setMeals] = React.useState([]);
  const [points, setPoints] = React.useState(0);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };

  useEffect(() => {
    const getGroups = async () => {
      const today = moment().format("YYYY-MM-DD");
      const url = `http://localhost:4000/meals/${userId.id}/${today}`;
      let res = await axios.get(url, config);
      setMeals(res.data.meals);
      setPoints(res.data.points[0].totalPoints);
    };
    getGroups();
  }, []);

  // const postData = async (addedFood) => {
  //   console.log(addedFood);
  //   const userId = localStorage.getItem("id");
  //   const dataPost = { userId, foodId: addedFood };
  //   let data = await axios.post("http://localhost:4000/meals", dataPost);
  //   console.log(data.data.points[0].totalPoints);
  //   setMeals(data.data.meals);
  //   setPoints(parseInt(data.data.points[0].totalPoints));
  //   return data;
  // };

  return (
    <div id="home-container">
        <AddMeal />
      <div id="daily-btns">
        {/* postData={postData} */}
        <Link
          to={{ pathname: `/FoodList` }}>          <div >אוכל</div>
        </Link>
        <div >מים</div>
        <div >צעדים</div>
      </div>


      {/* <div>TOTAL POINTS : {points}</div> */}

      {meals.map((u) => (
        <div> {u.name} </div>
      ))}
    </div>
  );
}

export default Daily;
