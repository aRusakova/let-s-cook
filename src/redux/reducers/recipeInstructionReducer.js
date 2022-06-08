import { initState } from "../initState";
import { GET_RECIPE_INSRUCTION } from "../types";

export default function recipeInsructionReducer (state = initState().recipeInstruction, action) {
    switch (action.type) {
        case GET_RECIPE_INSRUCTION:
            return action.payload
                    default:
                        return state;
    }
}