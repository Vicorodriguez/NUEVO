import React from 'react';
import './styles/index.css';




function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">

    <div className="footer-column">
      <h4>Dirección</h4>
      <p>Buenos Aires<br/>Argentina</p>
      <p>Tel: 011-115-1111</p>
    </div>

    <div className="footer-column">
      <h4>Páginas</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Seguinos</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 Victoria Rodriguez -Artista Plastica-. Todos los derechos reservados.</p>
  </div>
</footer>
  );
}

export default Footer;