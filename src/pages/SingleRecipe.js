import React, { Component } from "react";
import {recipeData} from "../data/tempDetails";

class SingleRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: recipeData
        };
    };

    render() {
        return(
            <div>
                <h1>{this.state.recipe.title}</h1>
            </div>
        )
    };
};

export default SingleRecipes;