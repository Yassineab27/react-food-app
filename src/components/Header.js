import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
    return(
        <header>
            <div className="container-fluid">
                <div className={`row align-items-center ${props.style}`}>
                    <div className="col text-center">
                        <h1 className="display-3 letter-spacing text-goldish text-indie">
                            {props.text}
                        </h1>
                        <Link to="/recipes" className="text-uppercase btn btn-outline-warning btn-lg mt-5">
                            Search Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;