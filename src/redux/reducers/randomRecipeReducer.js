import { initState } from "../initState";
import { GET_RANDOM_RECIPE } from "../types";


 export default function randomRecipeReducer (state = initState().randomRecipe, action) {
     switch (action.type) {
         case GET_RANDOM_RECIPE:
             return action.payload
                     default:
                         return state;
     }
 }