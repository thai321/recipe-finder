import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe, unFavoriteRecipe } from '../actions';


class RecipeItem extends Component {
  constructor() {
    super();

    this.state = {
      favorite: false
    }
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({favorite: true});
  }

  unFavorite(recipe) {
    this.props.unFavoriteRecipe(recipe);
    this.setState({favorite: false});
  }


  render() {
    let {
      recipe,
      recipe: {title, href, ingredients, thumbnail},
      inFavoriteList
    } = this.props;

    return (
      <div className="recipe-item">
        {
          inFavoriteList ?
            <div></div>
          :
            this.state.favorite ?
              <div className="star"
                onClick={() => this.unFavorite(recipe)}
              >
                &#9733;
              </div>
            :
              <div className="star"
                onClick={() => this.favorite(recipe)}
              >
                &#9734;
              </div>
        }

        <div className="recipe-text">
          <a href={href}>
            <h4 className="recipe-text">{title}</h4>
          </a>

          <p>{ingredients}</p>
        </div>

        <img src={thumbnail} alt={title} className="recipe-img" />

      </div>
    )
  }
}

export default connect(null, { favoriteRecipe, unFavoriteRecipe })(RecipeItem);
