import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import AddMeal from "./AddMeal";
import Date from "./Date"
import Water from "./Water"
import Steps from "./Steps"
import moment from "moment";
import React, { useEffect, useContext } from "react";

function Daily(p) {
  let userId = useParams();

  const [meals, setMeals] = React.useState([]);
  const [points, setPoints] = React.useState(0);
  const [date, setDate] = React.useState(moment().format("DD-MM-YYYY"));
  const [steps, setSteps] = React.useState(0);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };

  useEffect(() => {
    const getGroups = async () => {
      const url = `http://localhost:4000/meals/${userId.id}/${date}`;
      let res = await axios.get(url, config);
      setMeals(res.data.meals);
      setPoints(res.data.points[0].totalPoints);
    };
    getGroups();
  }, [date]);


  const handleDate = (action, days) => {


    let newDate;
    if (action == 'add') {
      newDate = moment().add(days, "days").format("DD-MM-YYYY")
    } else {
      newDate = moment().subtract(days, "days").format("DD-MM-YYYY")
    }
    setDate(newDate);
  }
  console.log(meals)


  return (
    <div id="home-container">
      <Date handleDate={handleDate} date={date} />
      <div className="points">{points}</div>
      <AddMeal />
      <div id="daily-btns">
        <Link
          to={{ pathname: `/FoodList` }}>          <div >אוכל</div>
        </Link>
        <Water date={date} />
        <Steps date={date} />
      </div>
      {meals.map((u) => (
        <div className="list-container">
          <div className="list-item">
            {u.amount} מנות {u.name}
          </div>
          <div className="list-item">
            {u.groupName}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Daily;
