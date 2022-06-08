import { combineReducers } from "redux";
import favoriteRecipesReducer from "./favoriteRecipesReducer";
import randomRecipeReducer from "./randomRecipeReducer";
import recipeInsructionReducer from "./recipeInstructionReducer";
import recipesReducer from "./recipesReducer";


 export default combineReducers({
    randomRecipe: randomRecipeReducer,
    recipes: recipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    recipeInstruction: recipeInsructionReducer,
 })