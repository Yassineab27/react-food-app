import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Recipe = (props) => {
    const { title, publisher, source_url, image_url, recipe_id, social_rank } = props.recipe;
    return(
        <div className="col-sm-10 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card card-class">
                <img src={image_url} alt="title" className="img-card-top card-img"/>
                <div className="card-body">
                    <h5 className="text-center">{title}</h5>
                    <h4 className="text-center ranking text-goldish">{social_rank.toFixed(2)} <i className="fas fa-star star-icon"></i></h4>
                    <h5 className="text-grey text-center" style={{fontStyle: "italic"}}>provided by <strong>{publisher}</strong></h5>
                </div>
                <div className="card-footer">
                    <Link to={`/recipes/${recipe_id}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mr-3">Details <i className="fas fa-info"></i></Link>
                    <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">Page Url <i className="fas fa-globe"></i></a>
                </div>
            </div>
            
        </div>
    )
};

export default Recipe;