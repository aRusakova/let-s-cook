import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    
    return (
        <>
            <Navbar className="nav" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{cursor: "pointer"}} onClick={()=>navigate('/')}>
                        <img
                            alt=""
                            src="img/free-icon-chef-7674219.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top img"
                        />{' '}
                        Let's cook !
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="navlink" onClick={()=>navigate('/search')}>Search recipe</Nav.Link>
                        <Nav.Link className="navlink" onClick={()=>navigate('/random')}>Random recipe</Nav.Link>
                        <Nav.Link className="navlink" onClick={()=>navigate('/favorites')}>Want to cook !</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
}

export default Header;


