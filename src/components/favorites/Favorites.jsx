import { useSelector } from "react-redux";
import Recipe from "../recipe/Recipe";

function Favorites() {

  const favoriteRecipes = useSelector(state => state.favoriteRecipes);

    return (
      <div>
       <>
            <div className="text">Your favorites recipes:</div>
            <hr />
            {favoriteRecipes.length ? favoriteRecipes.map(recipe => <Recipe {...recipe} /> )
                :
                <div className="textnull">You have not favorites recipes 😟</div>
            }
        </>
      </div>
    );
  }
  
  export default Favorites;