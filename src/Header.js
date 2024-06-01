import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Manasi Bhagwat</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="intro" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="resume" spy={true} smooth={true} offset={-70} duration={500}>Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
