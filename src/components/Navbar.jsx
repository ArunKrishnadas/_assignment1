import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav className="justify-content-center py-3 bg-primary">
      <Link to="/">
        <img src="https://img.icons8.com/?size=512&id=37968&format=png" alt="Logo" height="40" width="auto" />
      </Link>
      <Nav.Item>
        <Link to="/" className="nav-link mx-3 text-light">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/form" className="nav-link mx-3 text-light">Form</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-link mx-3 text-light">About</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;