import Axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./comp.css";
import moment from "moment";

function Date(props) {
    const [dateInfo, setDateInfo] = React.useState({ action: "add", days: 0 });

    console.log(props)
    // const today = moment().format("YYYY-MM-DD");
    const handleDaysData = async (e) => {
        if (dateInfo.action == "add" && e.target.id == "subtract") {
            setDateInfo({ ...dateInfo, action: e.target.id, days: 1 });

        } else if (dateInfo.action == "subtract" && e.target.id == "add") {
            if (props.date == moment().format("DD-MM-YYYY")) { return }
            setDateInfo({ ...dateInfo, action: "subtract", days: dateInfo.days - 1 });

        } else if (e.target.id == "add" && e.target.id == "add") {
            if (props.date == moment().format("DD-MM-YYYY")) { return }

            setDateInfo({ ...dateInfo, action: e.target.id, days: dateInfo.days + 1 })
        } else if (e.target.id == "subtract" && e.target.id == "subtract") {
            setDateInfo({ ...dateInfo, action: e.target.id, days: dateInfo.days + 1 })
        }
    }

    useEffect(() => {
        console.log(dateInfo)
        props.handleDate(dateInfo.action, dateInfo.days)


    }, [dateInfo]);

    return (
        <div id="dates-container">
            <div id="add" className="dates-btns" onClick={handleDaysData}>+</div>
            <div className="dates-btns current-date">{props.date}</div>
            <div id="subtract" className="dates-btns" onClick={handleDaysData}>-</div>

        </div>
    );
}

export default Date;
