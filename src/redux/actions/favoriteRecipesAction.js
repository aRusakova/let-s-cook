import { ADD_FAVORITE_RECIPES, GET_FAVORITE_RECIPES } from "../types";

export const getFavoriteRecipes = (recipes) => ({
    type: GET_FAVORITE_RECIPES,
    payload: recipes,
})

export const addFavoriteRecipes = (recipe) => ({
    type: ADD_FAVORITE_RECIPES,
    payload: recipe,
})