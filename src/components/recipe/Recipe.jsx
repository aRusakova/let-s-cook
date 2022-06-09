import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeInsructionFromServer } from "../../redux/actions/recipeInstructionAction";
import RecipesModal from "../recipesModal/RecipesModal";
import { addFavoriteRecipes } from "../../redux/actions/favoriteRecipesAction";
import { getRandomRecipeFromServer } from "../../redux/actions/randomRecipeAction";



function Recipe({ image, title, id, link }) {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const recipeInstruction = useSelector(state => state.recipeInstruction);

  const nextRandomRecipe = () => {
        dispatch(getRandomRecipeFromServer());
      }

  const getInstruction = (id) => {
    dispatch(getRecipeInsructionFromServer(id));
  }

  const addToFavorite = (recipe) => {
    dispatch(addFavoriteRecipes(recipe))
  }

  return (
    <>
      <Card style={{ width: '18rem' }} className={link == "random" ? "random-card" : null}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="btn-group">
          <Button variant="primary" onClick={() => { setShow(true); getInstruction(id) }}>View recipe</Button>
          {link == "random" &&<Button variant="primary" onClick={nextRandomRecipe}>Next</Button>}
          {(link == "random" || link == "search") ? <Button variant="primary" onClick={() => addToFavorite({image, title, id})}>Like</Button> : ''}
          </div>
        </Card.Body>
      </Card>

      <RecipesModal recipeInstruction={recipeInstruction} show={show} setShow={setShow} />
    </>

  );
}

export default Recipe;