import React from 'react';
import AccordionItem from './AccordionItem'; 
import { accordionData } from '../data/accordionData';
import './styles/index.css';

function AccordionSection() {
  return (
    <div className="container data">
      <h2 className="h2 text-center my-5">¿Por qué nos eligen?</h2>

      <div className="accordion" id="accordionExample">
        {/* 🛑 LÓGICA MAP: Generamos un AccordionItem por cada elemento en el array */}
        {accordionData.map(item => (
          <AccordionItem
            key={item.id} 
            id={item.id}
            target={item.target}
            titulo={item.titulo}
            cuerpo={item.cuerpo}
            linkUrl={item.linkUrl}
            linkText={item.linkText}
            show={item.show}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionSection;