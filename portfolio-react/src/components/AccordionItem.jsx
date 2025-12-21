import React from 'react';
import './styles/index.css'; 
function AccordionItem({ id, target, titulo, cuerpo, linkUrl, linkText, show }) {
    const buttonClass = show ? "accordion-button" : "accordion-button collapsed";
  const collapseClass = show ? "accordion-collapse collapse show" : "accordion-collapse collapse";

  return (
    <div className="accordion-item shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <h2 className="accordion-header">
        <button
          className={buttonClass} // Clase dinámica
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${target}`} // prop 'target' 
          aria-expanded={show ? "true" : "false"}
          aria-controls={target} // prop 'target' 
        >
          {titulo} {/* 🛑 Usa la prop 'titulo' */}
        </button>
      </h2>
      <div
        id={target} // 🛑 Usa la prop 'target' para el ID
        className={collapseClass} // Clase dinámica
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {cuerpo} {/* 🛑 Usa la prop 'cuerpo' */}
        </div>
        <a className="btn btn-outline-primary" href={linkUrl} role="button">
          {linkText} {/* 🛑 Usa la prop 'linkText' */}
        </a>
      </div>
    </div>
  );
}

export default AccordionItem;