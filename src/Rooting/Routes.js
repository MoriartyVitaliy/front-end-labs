import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

function AppRoutes() {
  const location = useLocation();
  const [isDefaultHome, setIsDefaultHome] = useState(true);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsDefaultHome(true);
    } else {
      setIsDefaultHome(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const wavePose = document.querySelectorAll('.wave');
    wavePose.forEach((wave, index) => {
      wave.style.animation = `wave 1s ease-in-out ${1}s`;
      wave.style.bottom = `80px`;
    });
  }, []);

  return (
    <>
      <nav>
        <ul id='navbar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={`main-content ${isDefaultHome ? '' : 'float-up'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRoutes;
