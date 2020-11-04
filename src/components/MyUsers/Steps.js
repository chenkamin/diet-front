import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./comp.css";
import moment from "moment";


function Steps(data) {
    const [steps, setSteps] = React.useState(0);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.token}` },
    };


    useEffect(() => {
        const getGroups = async () => {
            // const today = moment().format("YYYY-MM-DD");
            const id = localStorage.id;
            const url = `http://localhost:4000/meals/steps/${id}/${data.date}`;
            console.log("STEP-URL", url)

            let res = await axios.get(url, config);
            res.data[0] ? setSteps(res.data[0].num) : setSteps(0)

            console.log(res.data)

        };
        getGroups();
    }, [data.date]);

    const addSteps = () => {
        const updated = steps + 1000;
        setSteps(updated)
        return updated;
    }

    const subtracSteps = () => {
        if (steps == 0) {
            return
        }
        const updated = steps - 1000;
        setSteps(updated)
        return updated;
    }

    const postDataTest = async (e) => {
        console.log("")
        let updatedSteps;
        if (e.target.id === '+') {
            updatedSteps = addSteps();
        } else {
            updatedSteps = subtracSteps()
        }
        if (!updatedSteps) {
            return;
        }
        console.log(updatedSteps, "CHEN")
        let post = await axios.post("http://localhost:4000/meals/steps", { numCup: updatedSteps, userId: localStorage.id });


    };
    return (
        <div className="day-section">
            <div className="day-header">
                <div className="day-text">צעדים</div>
            </div>
            <div className="water-container">
                <div className="water-items" id="+" onClick={postDataTest}>+</div>
                <div className="water-items">{steps}</div>
                <div className="water-items" id="-" onClick={postDataTest}>-</div>
            </div>
        </div>
    );
}

export default Steps;
