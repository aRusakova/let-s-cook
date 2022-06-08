import { initState } from "../initState";
import { ADD_FAVORITE_RECIPES, GET_FAVORITE_RECIPES } from "../types";

export default function favoriteRecipesReducer (state = initState().favoriteRecipes, action) {
    switch (action.type) {
        case GET_FAVORITE_RECIPES:
            return action.payload
            case ADD_FAVORITE_RECIPES:
                return [...state, action.payload]
                    default:
                        return state;
    }
}