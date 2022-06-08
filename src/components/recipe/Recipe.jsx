import { Button, Card, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeInsructionFromServer } from "../../redux/actions/recipeInstructionAction";
import RecipesModal from "../recipesModal/RecipesModal";



function Recipe({ image, title, id }) {

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const recipeInstruction = useSelector(state => state.recipeInstruction);

  const getInstruction = (id) => {
    dispatch(getRecipeInsructionFromServer(id));
  }

  

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" onClick={() => { setShow(true); getInstruction(id) }}>View recipe</Button>
        </Card.Body>
      </Card>

      <RecipesModal recipeInstruction={recipeInstruction} show={show} setShow={setShow} />
    </>

  );
}

export default Recipe;