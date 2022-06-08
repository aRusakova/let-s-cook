import { initState } from "../initState";
import { GET_RECIPES } from "../types";

export default function recipesReducer (state = initState().recipes, action) {
    switch (action.type) {
        case GET_RECIPES:
            return action.payload
                    default:
                        return state;
    }
}