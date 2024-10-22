import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Import icons

function Navbar() {
  return (
    <nav>
      <ul id='navbar'>
        <li>
          <Link to="/">
            <FaHome className="icon" />
            <span className="nav-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle className="icon" />
            <span className="nav-text">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope className="icon" />
            <span className="nav-text">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
