import Axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./comp.css";

function Food(data) {
    const [flag, setFlag] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0);


    // useEffect(() => {
    //     const getGroups = async () => {
    //         // let res = await apiService.get('foods')
    //         // var Axios = axios.create({
    //         //   withCredentials: true,
    //         // });
    //         const config = {
    //             headers: { Authorization: `Bearer ${localStorage.token}` },
    //         };
    //         const url = `http://localhost:4000/foods`;
    //         let res = await Axios({ url, config });
    //         setFoods(res.data);
    //         console.log("EFFECT");
    //     };
    //     getGroups();
    // }, []);
    // console.log(data)


    let handleInput = (e) => {
        const operator = e.target.value
        console.log(typeof (operator))
        if (e.target.value == "+") {
            if (!flag) {
                console.log(flag)
                setFlag(!flag);
            }
            setQuantity(quantity + 1)
            data.createMael({ userId: localStorage.id, foodId: data.data.id, groupId: data.data.groupId }, "add")
        } else if (e.target.value == "-") {
            if (quantity == 0) {
                setFlag(!flag);
            }
            setQuantity(quantity - 1)
            data.createMael(null, "remove", data.data.id)

        }

    }

    return (
        <div id="home-container">
            <span id={data.data.id}>{data.data.name} </span>
            <span id={data.data.groupId}>{data.data.groupName}</span>
            {flag ? <input type="button" value="-" className="button-minus" data-field="quantity" onClick={handleInput} /> : null}
            {flag ? <input type="number" step="1" max="" value={quantity} name="quantity" className="quantity-field" /> : null}
            <input type="button" value="+" className="button-plus" data-field="quantity" onClick={handleInput} />

        </div>
    );
}

export default Food;
