import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './recipe_item';


class FavoriteRecipeList extends Component {
  render() {
    return (
      <div>
        <h4><Link to='/'>Home</Link></h4>
        <h4>Favorite Recipes:</h4>
        {
          this.props.setFavoriteRecipe.map((recipe, index) => {
            return (
              <RecipeItem
                key={index}
                recipe={recipe}
                inFavoriteList={true}
              />
            )
          })
        }
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    setFavoriteRecipe: state.setFavoriteRecipe
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
