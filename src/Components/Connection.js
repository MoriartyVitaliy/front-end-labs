import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Імпорт нових іконок
import { Link } from 'react-router-dom';

function Connect() {
  return (
    <nav>
      <ul id='connect'>
        <li>
            <Link to="https://github.com/MoriartyVitaliy">
                <FaGithub className="icon" />
            </Link>
        </li>
        <li>
            <Link to="https://www.linkedin.com/in/your-linkedin-profile" style={{color: "#1d55cf"}}>
                <FaLinkedin className="icon" />
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Connect;
