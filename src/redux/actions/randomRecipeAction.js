import axios from "axios";
import { GET_RANDOM_RECIPE } from "../types";


export const getRandomRecipe = (recipe) => ({
    type: GET_RANDOM_RECIPE,
    payload: recipe,
})

export const getRandomRecipeFromServer = () => async(dispatch) => {
    const res = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=c5647d44db0d4714a5a4cf023605930e');
    dispatch(getRandomRecipe(res.data.recipes));   
}
