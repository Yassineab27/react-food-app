import React, { Component } from "react";
import RecipeSearch from "../components/RecipeSearch";
import Recipe from "../components/Recipe";
import { recipeData } from "../data/tempList";


class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipeData
        };
    };



    render() {
        const { recipes } = this.state;
        const recipesList = recipes.map(recipe => {
            return <Recipe key={recipe.recipe_id} recipe={recipe}/>
        })
        return(
            <div>
                <RecipeSearch search={this.handleSearch}/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-dark text-indie">Recipe List</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            {recipesList}
                        </div>
                    </div>    
                </div>
            </div>
        )
    };
};

export default Recipes;