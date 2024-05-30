import React from 'react';

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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

    
  );
};

export default Header;
