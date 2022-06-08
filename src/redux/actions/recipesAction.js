import axios from "axios";
import { GET_RECIPES } from "../types";

export const getRecipes = (recipes) => ({
    type: GET_RECIPES,
    payload: recipes,
})

export const getRecipesFromServer = (form) => async(dispatch) => {
    console.log(form)
    const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&cuisine=${form.cuisine}&diet=${form.diet}&type=${form.type}&includeIngredients=${form.includeIngredients}&apiKey=8cecb8d8adc7439f8319a3cae27ed960`);
    console.log(res.data.results)
    dispatch(getRecipes(res.data.results));   
}
