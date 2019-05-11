import React, { Component } from "react";
import RecipeSearch from "../components/RecipeSearch";
import Recipe from "../components/Recipe";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            error: false
        };
    };

    async componentDidMount() {
        try {
            const data = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=chicken%20breast&page=2`);
            const response = await data.json();
            
            console.log(response)
            this.setState({
                recipes: response.recipes
            });
        }
        catch(err) {
            console.log(err)
        }
    };

    handleSearch = async (search) => {
        try {
            const data = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&q=${search}`);
            const response = await data.json();
            
            if(!response.recipes.length) {
                return this.setState({
                    error: true,
                });
            }
            this.setState({
                recipes: response.recipes
            });
        }
        catch(err) {
            console.log(err)
        }
    };

    render() {
        const { recipes, error } = this.state;
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
        
        const title = error ? (
            <>
                <h1 className="text-dark text-indie">Sorry, but your search did not return any recipe. Please try again</h1>
                <p className="text-dark text-indie">*press search icon for the most popular recipes*</p>
            </>
        ) : (
            <h1 className="text-dark text-indie">Recipe List</h1>
        )
        return(
            <div>
                <RecipeSearch search={this.handleSearch}/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            {title}
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