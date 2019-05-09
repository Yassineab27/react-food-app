import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import ErrorPage from "./pages/ErrorPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/recipes" component={Recipes}/>
          <Route path="/recipes/:id" component={SingleRecipe}/>
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
