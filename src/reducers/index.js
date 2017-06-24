import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_RECIPE, UNFAVORITE_RECIPE } from '../actions';

function recipes(state=[], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;

  }
}

function setFavoriteRecipe(state=[], action) {
  switch (action.type) {
    case FAVORITE_RECIPE:
      state = [...state, action.recipe];
      return state;
    case UNFAVORITE_RECIPE:
      state = state.filter( item => item !== action.recipe)
      console.log('Gone: ', state);
      return state;
    default:
      return state;
  }
}


const rootReducer = combineReducers({ recipes, setFavoriteRecipe });

export default rootReducer
