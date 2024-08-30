import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand href="#home">OPEN WINDOW |</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/" className="nav-link font-weight-bold">
              Home |
            </Link>

            <Link to="/searching" className="nav-link font-weight-bold">
              Ricerca |
            </Link>

            <Link to="/curiosities" className="nav-link font-weight-bold">
              Curiosità |
            </Link>

            <Link to="/extra" className="nav-link font-weight-bold">
              Extra |
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
