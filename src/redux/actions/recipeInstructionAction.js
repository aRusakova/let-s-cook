import axios from "axios";
import { GET_RECIPE_INSRUCTION } from "../types";


export const getRecipesInstruction = (instuction) => ({
    type: GET_RECIPE_INSRUCTION,
    payload: instuction,
})

export const getRecipeInsructionFromServer = (id) => async(dispatch) => {
    console.log(id, 'id')
    const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c5647d44db0d4714a5a4cf023605930e`);
    console.log(res.data.instructions)
    dispatch(getRecipesInstruction(res.data.instructions));   
}
// c5647d44db0d4714a5a4cf023605930e
// 8cecb8d8adc7439f8319a3cae27ed960
