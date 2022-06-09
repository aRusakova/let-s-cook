import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRandomRecipeFromServer } from "../../redux/actions/randomRecipeAction";
import Recipe from "../recipe/Recipe";
import Search from "../searchForm/SearchForm";

function Recipes() {

    const { link } = useParams();

    const dispatch = useDispatch();

    const randomRecipe = useSelector(state => state.randomRecipe)[0];

    const favoriteRecipes = useSelector(state => state.favoriteRecipes);

    const recipes = useSelector(state => state.recipes);

    useEffect(() => {
    dispatch(getRandomRecipeFromServer());
    }, [])


    return (
      <div className="recipe">
      {link == "random" ? <div className="randomRecipe"><Recipe {...randomRecipe} link={link}/></div> :
       link == "favorites" ?
       <> 
       <div className="text">Your favorites recipes:</div>
       <div className="recipe-list">{favoriteRecipes.length ? favoriteRecipes.map(favoriteRecipe => <Recipe {...favoriteRecipe} link={link} />) :
       <div className="textnull">You have not favorites recipes 😟</div>}</div>
        </> :
        link == "search" ? 
        <>
        <Search/>
        <div className="recipe-list">{recipes.length ? recipes.map(recipe => <Recipe {...recipe} link={link} />) : ''}</div>
        </>
        : ''}
      </div>
    );
  }
  
  export default Recipes;