import React, { Component } from 'react';
import SearchRecipes from '../containers/search_recipes';
import RecipeList from './recipe_list';
// import FavoriteRecipeList from './favorite_recipe_list';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}


export default App;
