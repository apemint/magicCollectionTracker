//  import "../Nav/style.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navbar2() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/search">MtG Collection Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/cards">My Collection</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/404">My Decks *UNDER_CONSTRUCTION*</NavDropdown.Item>
                            <NavDropdown.Item href="/404">About Us *UNDER_CONSTRUCTION*</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Navbar2;