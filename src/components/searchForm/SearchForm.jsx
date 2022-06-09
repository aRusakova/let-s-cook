import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getRecipesFromServer } from "../../redux/actions/recipesAction";


function Search({link}) {

  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const changeHandler = (e) => {
    setForm(prev=> ({...prev, [`${e.target.name}`]: e.target.value}));
  }

  const handleSave = (e) => {
    dispatch(getRecipesFromServer(form))
    setForm(prev => ({...prev, cuisine: "---", diet: "---", type: "---", includeIngredients: ""}))
  }

  
    return (
      <div className="searchContainer">
  <Form.Group className="mb-3">
    <Form.Label className="formText">Choose the cuisine of the recipes : </Form.Label>
    <Form.Select name="cuisine" onChange={changeHandler} value={form.cuisine}>
      <option>---</option>
      <option>American</option>
      <option>British</option>
      <option>Chinese</option>
      <option>European</option>
      <option>French</option>
      <option>German</option>
      <option>Greek</option>
      <option>Indian</option>
      <option>Mexican</option>
    </Form.Select>
    <Form.Label className="formText">Choose the diet for which the recipes must be suitable : </Form.Label>
    <Form.Select name="diet" onChange={changeHandler} value={form.diet}>
      <option>---</option>
      <option>Gluten Free</option>
      <option>Ketogenic</option>
      <option>Vegetarian</option>
      <option>Vegan</option>
      <option>Paleo</option>
    </Form.Select>
    <Form.Label className="formText">Choose the type of recipe : </Form.Label>
    <Form.Select name="type" onChange={changeHandler} value={form.type}>
      <option>---</option>
      <option>main course</option>
      <option>side dish</option>
      <option>appetizer</option>
      <option>salad</option>
      <option>soup</option>
      <option>breakfast</option>
      <option>snack</option>
    </Form.Select>
    <Form.Label className="formText">Add ingredients that should/must be used in the recipes</Form.Label>
    <Form.Control name="includeIngredients" onChange={changeHandler} value={form.includeIngredients} type="text" placeholder="for example: tomato,cheese"/>
  </Form.Group>
  <Button className="btn-search"
              variant="primary" 
              onClick={handleSave}
              >
             Search !
            </Button>

</div>
    );
  }
  
  export default Search;