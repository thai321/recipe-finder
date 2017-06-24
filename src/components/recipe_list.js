import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './recipe_item';

class RecipeList extends Component {
  render() {
    console.log('this.props: ', this.props)
    return (
      <div>
        <h4><Link to='/favorites'>Favorites</Link></h4>

        {
          this.props.recipes.map( (recipe, index) => {
            return (
              <RecipeItem
                key={index}
                recipe={recipe}
              />
            )
          })
        }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
