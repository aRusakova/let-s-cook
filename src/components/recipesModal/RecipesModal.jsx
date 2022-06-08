import { Modal } from "react-bootstrap";
import parse from 'html-react-parser';


function RecipesModal({ recipeInstruction, show, setShow }) {

  return (
    <>
      <Modal
        show={show} onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <img src="img/premium-icon-chef-730142.png" alt="" width="100" height="100" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {parse(recipeInstruction)}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RecipesModal;