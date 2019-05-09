import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <Link to="/">
                <h3>React Food</h3>
            </Link>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/recipes">Recipes</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;