import React, { Component } from "react";
import "../App.css";

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.search);
        this.setState({
            search: ""
        });
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10-auto mx-auto col-md-8 mt-5 text-center">
                        <h1 className="text-dark text-capitalize text-indie">Search recipes with <strong className="text-goldish text-parisienne">React Food</strong></h1>
                        <form className="mt-4" onSubmit={this.handleSubmit}>
                            <label htmlFor="search" className="text-dark text-indie">type recipes separated by comma</label>
                            <div className="input-group">
                                <input type="text"
                                className="form-control"
                                id="search"
                                name="search"
                                value={this.state.search}
                                placeholder="ex: chicken,onion,carrots..."
                                onChange={this.handleChange}/>
                                <div className="input-group-append">
                                    <button type="submit" className="input-group-text bg-goldish text-dark">
                                        <i className="fas fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
};

export default RecipeSearch;