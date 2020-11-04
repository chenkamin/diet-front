import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./comp.css";
import moment from "moment";

function Water(data) {
    const [water, setWater] = React.useState(0);
    // const [date, setDate] = React.useState(data.date);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` },
    };
    // setDate(data.date)
    // console.log("THIS IS DATA-DATE", data.date)
    // console.log("STATE-DATE", date)
    useEffect(() => {
        const getGroups = async () => {
            // const today = moment().format("YYYY-MM-DD");
            const id = localStorage.id;
            const url = `http://localhost:4000/meals/water/${id}/${data.date}`;
            // console.log("DATE - URL", url)
            let res = await axios.get(url, config);
            // console.log(res)
            res.data[0] ? setWater(res.data[0].num) : setWater(0)
        };
        getGroups();
    }, [data.date]);

    const addWater = () => {
        const updated = water + 1;
        setWater(updated)
        return updated;
    }

    const subtractWater = () => {
        if (water == 0) {
            return
        }
        const updated = water - 1;
        setWater(updated)
        return updated;
    }

    const postDataTest = async (e) => {
        let updatedWater;
        if (e.target.id === '+') {
            updatedWater = addWater();
        } else {
            updatedWater = subtractWater()
        }
        if (!updatedWater) {
            return;
        }
        console.log(updatedWater, "CHEN")
        let post = await axios.post("http://localhost:4000/meals/water", { numCup: updatedWater, userId: localStorage.id });


    };



    console.log(data)
    return (
        <div className="water-section">
            <div className="day-header">
                <div className="day-text">מים</div>
            </div>
            <div className="water-container">
                <div className="water-items" id="+" onClick={postDataTest}>+</div>
                <div className="water-items">{water}</div>
                <div className="water-items" id="-" onClick={postDataTest}>-</div>
            </div>
        </div>
    );
}

export default Water;
