// src/components/CarouselSection.jsx

import React from 'react';
import { carouselItems } from '../data/obras'; // 🛑 Asegúrate que la ruta sea correcta
import './styles/index.css';

function CarouselSection() {
    return (
        <main>
          <h1 className="space-grotesk-700">PINTURAS AL OLEO Y ACRILICO - RETRATO DE PAISAJE</h1>

          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            
            {/* 1. INDICADORES (Generados con map) */}
            <div className="carousel-indicators">
              {carouselItems.map((item, index) => (
                <button
                  key={item.id} // Clave única de React
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className={item.active ? 'active' : ''} // Clase 'active' si item.active es true
                  aria-current={item.active ? 'true' : 'false'}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* 2. ITEMS DEL CARRUSEL (Generados con map) */}
            <div className="carousel-inner">
              {carouselItems.map(item => (
                <div 
                  key={item.id} 
                  className={`carousel-item ${item.active ? 'active' : ''}`} // Clase 'active' si item.active es true
                >
                  <img
                    src={item.src} // 🛑 Usa la ruta del objeto de datos
                    className="d-block w-100"
                    alt={item.alt}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.titulo}</h5>
                    <p>{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 3. CONTROLES (Mantenemos el HTML estático, con className) */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </main>
    );
}

export default CarouselSection;