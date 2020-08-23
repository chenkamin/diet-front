import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div id="home-container">
            <Link
                to={{
                    pathname: `/daily/${localStorage.id}`,
                }}
            >
                <div id={localStorage.id}>היום</div>
            </Link>
            <div>מתכונים</div>
        </div>
    );
}

export default Home;
