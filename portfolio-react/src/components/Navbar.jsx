import React from 'react';
import './styles/index.css';

function Navbar() {
    return (
          <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container">
          <a className="navbar-brand" href="#"
            ><img className="img-logo" src="/logo/logo real.png" alt="logo"
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="./index.html">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./portfolio.html">Portfolio</a>
              </li>
             <li className="nav-item">
                <a className="nav-link" href="./blog.html">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
  export default Navbar;
