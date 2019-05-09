import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = (props) => {
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link to="/" className="navbar-brand text-parisienne ml-5">
                <h3>React Food</h3>
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
                <ul className="navbar-nav ml-auto mr-5">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/recipes">Recipes</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
};

export default Nav;