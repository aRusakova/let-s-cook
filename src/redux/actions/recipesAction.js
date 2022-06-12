import axios from "axios";
import { GET_RECIPES } from "../types";
const { REACT_APP_API_KEY: key } = process.env;

export const getRecipes = (recipes) => ({
    type: GET_RECIPES,
    payload: recipes,
})

export const getRecipesFromServer = (form) => async(dispatch) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&cuisine=${form.cuisine}&diet=${form.diet}&type=${form.type}&includeIngredients=${form.includeIngredients}&apiKey=${key}`);
    dispatch(getRecipes(res.data.results));   
}
