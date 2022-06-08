import { useEffect, useState } from "react";
import { Button, Card  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRandomRecipeFromServer } from "../../redux/actions/randomRecipeAction";
import parse from 'html-react-parser';
import { addFavoriteRecipes } from "../../redux/actions/favoriteRecipesAction";
import { getRecipeInsructionFromServer } from "../../redux/actions/recipeInstructionAction";
import RecipesModal from "../recipesModal/RecipesModal";


function Random() {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const randomRecipe = useSelector(state => state.randomRecipe);

  const recipeInstruction = useSelector(state => state.recipeInstruction);

  useEffect(() => {
    dispatch(getRandomRecipeFromServer());
  }, [])

  const nextRandomRecipe = () => {
    dispatch(getRandomRecipeFromServer());
  }

  const addToFavorite = (recipe) => {
    dispatch(addFavoriteRecipes(recipe))
  }

  const getInstruction = (id) => {
    dispatch(getRecipeInsructionFromServer(id));
  }


  return (
    <>
      {randomRecipe.length ? 
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={randomRecipe[0].image} />
        <Card.Body>
          <Card.Title>{randomRecipe[0].title}</Card.Title>
          <Card.Text>
          <div>Ingridients :</div>
          <ul>{randomRecipe[0].extendedIngredients.map(ingridient => <li>{parse(ingridient.name)}</li>)}</ul>
          </Card.Text>
          <Button variant="primary" onClick={() => { setShow(true); getInstruction(randomRecipe[0].id)}}>View recipe</Button>
          <Button variant="primary" onClick={nextRandomRecipe}>Next</Button>
          <Button variant="primary" onClick={() => addToFavorite(randomRecipe[0])}>Like</Button>
        </Card.Body>
      </Card> : <div>LOADING</div>}
      
      
      <RecipesModal recipeInstruction={recipeInstruction} show={show} setShow={setShow} />
    </>
  );
}

export default Random;