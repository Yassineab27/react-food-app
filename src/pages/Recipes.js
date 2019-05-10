import React, { Component } from "react";
import RecipeSearch from "../components/RecipeSearch";
import Recipe from "../components/Recipe";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null
        };
    };

    async componentDidMount() {
        const data = await fetch(`https://www.food2fork.com/api/search?key=API_KEY&q=chicken%20breast&page=2`);
        const response = await data.json();
        
        this.setState({
            recipes: response.recipes
        });
    };

    render() {
        const { recipes } = this.state;
        const recipesList = recipes ? (
            recipes.map(recipe => {
            return <Recipe key={recipe.recipe_id} recipe={recipe}/>
            })
        ) : (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h2 className="text-orange text-center">
                            loading recipe...
                        </h2>
                    </div>
                </div>
            </div>
        )

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
                        {recipesList}
                    </div>    
                </div>
            </div>
        )
    };
};

export default Recipes;