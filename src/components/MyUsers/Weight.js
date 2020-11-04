import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./comp.css";
import moment from "moment";
import WeightGraph from './WeightGraph';

function Weight() {
    const [weightArr, setWeight] = React.useState([]);
    const [date, setDate] = React.useState(moment().format("DD-MM-YYYY"));
    const [dateArr, setDateArr] = React.useState([]);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` },
    };


    useEffect(() => {
        const getGroups = async () => {
            // const today = moment().format("YYYY-MM-DD");
            const id = localStorage.id;
            //syntax for last wight            const url = `http://localhost:4000/weight?id=${id}&date=${date}`;

            const url = `http://localhost:4000/weight/${id}`;
            console.log(url)

            let res = await axios.get(url, config);
            setWeight(res.data.weights)
            setDateArr(res.data.dates)

        };
        getGroups();
    }, []);

    return (
        <div className="day-section">
            <div className="day-text">  המשקל הנוכחי שלי </div>
            <div>{weightArr[weightArr.length - 1]}</div>
            <WeightGraph weight={weightArr} dates={dateArr} />
        </div>
    );
}

export default Weight;
