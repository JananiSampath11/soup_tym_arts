import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="">
      <Container className=''>
        <Navbar.Brand href="#home" className='fs-3'>Soup Tym Artz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Pencil Sketch
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Portrait</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Scenary</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Landscape</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Watercolor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Customize Work
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;