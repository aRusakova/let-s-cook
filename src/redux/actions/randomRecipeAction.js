import axios from "axios";
import { GET_RANDOM_RECIPE } from "../types";
const { REACT_APP_API_KEY: key } = process.env;

export const getRandomRecipe = (recipe) => ({
    type: GET_RANDOM_RECIPE,
    payload: recipe,
})

export const getRandomRecipeFromServer = () => async(dispatch) => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${key}`);
    dispatch(getRandomRecipe(res.data.recipes));   
}
