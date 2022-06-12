import axios from "axios";
import { GET_RECIPE_INSRUCTION } from "../types";
const { REACT_APP_API_KEY: key } = process.env;


export const getRecipesInstruction = (instuction) => ({
    type: GET_RECIPE_INSRUCTION,
    payload: instuction,
})

export const getRecipeInsructionFromServer = (id) => async(dispatch) => {
    console.log(id, 'id')
    const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`);
    console.log(res.data.instructions)
    dispatch(getRecipesInstruction(res.data.instructions));   
}

