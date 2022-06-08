import axios from "axios";
import { GET_RANDOM_RECIPE } from "../types";


export const getRandomRecipe = (recipe) => ({
    type: GET_RANDOM_RECIPE,
    payload: recipe,
})

export const getRandomRecipeFromServer = () => async(dispatch) => {
    const res = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=8cecb8d8adc7439f8319a3cae27ed960');
    dispatch(getRandomRecipe(res.data.recipes));   
}
