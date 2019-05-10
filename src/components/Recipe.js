import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Recipe = (props) => {
    const { title, publisher, source_url, image_url, recipe_id } = props.recipe;
    return(
        <div className="col-sm-10 col-md-6 col-lg-4 mx-auto my-2">
            <div className="card" style={{height: "100%"}}>
                <img src={image_url} alt="title" className="img-card-top card-img"/>
                <div className="card-body">
                    <h5>{title}</h5>
                    <h5 className="text-goldish" style={{fontStyle: "italic"}}>provided by <strong>{publisher}</strong></h5>
                </div>
                <div className="card-footer">
                    <Link to={`/recipes/${recipe_id}`} className="btn btn-outline-success mr-3">Details <i className="fas fa-info"></i></Link>
                    <a href={source_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-warning">Page Url <i className="fas fa-globe"></i></a>
                </div>
            </div>
            
        </div>
    )
};

export default Recipe;