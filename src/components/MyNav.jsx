import { Container,NavDropdown, Navbar, Nav } from "react-bootstrap"

const MyNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">OPEN WINDOW  |</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home  |</Nav.Link>
            <Nav.Link href="#link">Previsioni  |</Nav.Link>
            <Nav.Link href="#link">Ricerche interessanti  |</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default MyNav