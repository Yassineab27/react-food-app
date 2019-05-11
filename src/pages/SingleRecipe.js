import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class SingleRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null
        };
        console.log(props.match.params.id)
    };

    async componentDidMount() {
        try {
            const { id } = this.props.match.params;
            const data = await fetch(`https://www.food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${id}`);
            const response = await data.json();
    
    
            console.log(response);
            this.setState({
                recipe: response.recipe
            });
        }
        catch(err) {
            console.log(err)
        }
    };

    render() {
        const {recipe} = this.state;
        const recipeInfo = recipe ? (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/recipes" className="btn btn-warning mb-4">
                            <i className="fas fa-undo-alt"></i> back to recipes list
                        </Link>
                        <img src={recipe.image_url} alt={recipe.title} className="d-block w-100 Singlecard-img"/> 
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h3 className="text-goldish">{recipe.title}</h3>
                        <h6 className="text-dark" style={{fontStyle: "italic"}}>published by <strong>{recipe.publisher}</strong></h6>
                        <h4 className="ranking text-goldish">{recipe.social_rank.toFixed(2)} <i className="fas fa-star star-icon"></i></h4>
                        <ul className="list-group mb-4">
                            <h2 className="mt-3 mb-4 text-grey">Ingredients</h2>
                            {recipe.ingredients.map((item, index) => {
                                return(
                                    <li key={index} className="list-group-item text-dark">
                                        {item}
                                    </li>
                                )
                            })}
                        </ul>
                        <a href={recipe.publisher_url} target="_blank" rel="noopener noreferrer" className="btn btn-success mt-2 mx-2"><i className="fas fa-user"></i> publisher</a>
                        <a href={recipe.source_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2 mx-2"><i className="fas fa-globe"></i> Page Url </a>
                    </div>
                </div>
            </div>
            
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
            <div className={this.state.recipe ? "recipesPage-bg" : ""}>
                {recipeInfo}
            </div>
        )
    };
};

export default SingleRecipes;