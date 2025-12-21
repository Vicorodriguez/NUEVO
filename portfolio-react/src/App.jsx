
import React from 'react'; // Necesitas React si usas JSX
import Navbar from './components/Navbar.jsx';
import CarouselSection from './components/CarouselSection.jsx';
import AccordionSection from './components/AccordionSection.jsx';
import Footer from './components/Footer.jsx';
import Layout from './components/Layout.jsx';// 🛑 Asegúrate de que NO haya imports de ReactDOM o del mismo App.jsx aquí.
import Contacto from './components/Contacto.jsx'; 
import AccordionItem from './components/AccordionItem.jsx';

function App() { 
  return (
    <>
      <Navbar />
      <CarouselSection />
      <AccordionSection />
      <AccordionItem />
      <Footer />
      <Contacto />
      <Layout />

    </>
  );
}

export default App; 
