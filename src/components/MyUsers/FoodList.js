import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import Food from './Food';

function FoodList() {
    const [foods, setFoods] = React.useState([]);
    const [meals, setMeals] = React.useState([]);


    useEffect(() => {
        const getGroups = async () => {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.token}` },
            };
            const url = `http://localhost:4000/foods`;
            let res = await axios({ url, config });
            setFoods(res.data);
        };
        getGroups();
    }, []);

    const postDataTest = async () => {
        let data = await axios.post("http://localhost:4000/meals", meals);
        // console.log(data.data.points[0].totalPoints);
        // setMeals(data.data.meals);
        // setPoints(parseInt(data.data.points[0].totalPoints));
        // return data;
    };

    const createMael = (obj = null, method, foodId = null) => {
        console.log(obj)
        if (method == "add") {
            setMeals(meals => [...meals, obj])
        } else {
            let toRemoveIndex = meals.find(m => m.foodId == foodId)
            meals.splice(meals.indexOf(toRemoveIndex) - 1, 1)
            setMeals(meals => [...meals])
        }
    }


    return (
        <div id="home-container">
            {foods.map(f => <Food data={f} createMael={createMael} />)}

            <Link
                to={{
                    pathname: `/daily/${localStorage.id}`,
                }}
            >
                <div onClick={postDataTest}>send</div>
            </Link>
      ;

        </div>
    );
}

export default FoodList;
