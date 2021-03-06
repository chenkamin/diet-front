import Axios from "axios";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   useParams,
// } from "react-router-dom";
// import User from "./User";
// import moment from "moment";
import apiService from "./../../utils/apiService";
import React, { useEffect, useContext } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./comp.css";

am4core.useTheme(am4themes_animated);
function AddMeal(b) {
  const [foods, setFoods] = React.useState([]);
  const [addedFood, setAddedFood] = React.useState({ id: 0 });
  const config = {
    headers: { Authorization: `Bearer ${localStorage.token}` },
  };
  useEffect(() => {
    const getGroups = async () => {
      // let res = await apiService.get('foods')
      // var Axios = axios.create({
      //   withCredentials: true,
      // });
      const url = `http://localhost:4000/foods`;
      let res = await Axios({ url, config });
      setFoods(res.data);
    };
    getGroups();
  }, []);
  const addMeal = () => {
    b.postData(addedFood.id);
  };

  const handleInputs = (e) => {

    setAddedFood({ ...addedFood, [e.target.name]: e.target.value });
  };
  let chart = am4core.create("chartdiv", am4charts.SlicedChart);
  chart.paddingBottom = 10;
  chart.data = [
    {
      "name": "סוכרים",
      "value": 1
    }, {
      "name": "פירות",
      "value": 1
    }, {
      "name": "ירקות",
      "value": 1
    }, {
      "name": "שומנים",
      "value": 1
    }, {
      "name": "חלבונים",
      "value": 1
    }, {
      "name": "דגנים",
      "value": 1
    }];

  var series = chart.series.push(new am4charts.PyramidSeries());
  series.dataFields.value = "value";
  series.dataFields.category = "name";
  series.alignLabels = false;
  series.valueIs = "width";
  series.calculatePercent = true;





  return (
    <div id="graph-funnel">
      {/* <select name="id" onChange={handleInputs}>
        {foods.map((f) => (
          <option value={f.id} name="id">
            {f.name}{" "}
          </option>
        ))}
      </select> */}
      <div id="chartdiv"></div>

    </div>
  );
}

export default AddMeal;
