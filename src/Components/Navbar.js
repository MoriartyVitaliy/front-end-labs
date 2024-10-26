import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  return (
    <nav>
      <ul id='navbar'>
        <li>
          <button onClick={() => scrollToElement('home')}>
            <FaHome className="icon" />
            <span className="nav-text">Home</span>
          </button>
        </li>
        <li>
          <button onClick={() => scrollToElement('about')}>
            <FaInfoCircle className="icon" />
            <span className="nav-text">About</span>
          </button>
        </li>
        <li>
          <button onClick={() => scrollToElement('contact')}>
            <FaEnvelope className="icon" />
            <span className="nav-text">Contact</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
