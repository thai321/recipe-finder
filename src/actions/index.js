export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
export const UNFAVORITE_RECIPE = 'UNFAVORITE_RECIPE';

export function setRecipes(items) {
  console.log(items);
  return {
    type: SET_RECIPES,
    items
  }
}

export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe
  }
}

export function unFavoriteRecipe(recipe) {
  return {
    type: UNFAVORITE_RECIPE,
    recipe
  }
}
