import React, { Component } from "react";
import RecipeSearch from "../components/RecipeSearch";
import Recipe from "../components/Recipe";
import "../App.css";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: null,
            error: false,
            page: 1
        };
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = async () => {
        try {
            const data = await fetch(`https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}&page=${this.state.page}`);
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

    handlePage = (e) => {
        this.setState({
            page: e.target.value
        }, this.fetchData)
    };

    handlePageNext = (e) => {
        this.setState(prevState => {
            return {
                page: prevState.page + 1
            }
        });
        this.fetchData();
    }

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
                            <i className="fas fa-spinner fa-spin"></i>
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
            <h1 className={this.state.recipes ? "text-dark text-indie" : "buttons-disabled"}>Recipe List</h1>
        )
        return(
            <div className={this.state.recipes ? "recipesPage-bg" : ""}>
                <RecipeSearch search={this.handleSearch}/>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            {title}
                        </div>
                    </div>
                    <div className={this.state.recipes ? "buttons" : "buttons-disabled"}>
                        <button className="btn btn-success mr-1" value="1" onClick={this.handlePage}>1</button>
                        <button className="btn btn-success mr-1" value="2" onClick={this.handlePage}>2</button>
                        <button className="btn btn-success mr-1" value="3" onClick={this.handlePage}>3</button>
                        <button className="btn btn-success mr-1" value="4" onClick={this.handlePage}>4</button>
                        <button className="btn btn-success mr-1" value="5" onClick={this.handlePage}>5</button>
                        <button className="btn btn-success mr-1" onClick={this.handlePageNext}>Next</button>
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