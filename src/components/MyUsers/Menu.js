import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div className="btns-container">
            <Link
                to={{
                    pathname: `/daily/${localStorage.id}`,
                }}
            >
                <div  className="btns-inputs" id={localStorage.id}>היום</div>
            </Link>
            <div  className="btns-inputs">מתכונים</div>
            <Link
                to={{
                    pathname: `/weight/${localStorage.id}`,
                }}
            >
                <div  className="btns-inputs" id={localStorage.id}>המשקל שלי</div>
            </Link>
        </div>
    );
}

export default Home;
