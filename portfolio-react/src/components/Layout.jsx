import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

// El "children" es lo que permite que el contenido principal cambie
function Layout({ children }) {
  return (
    <>
      <Navbar /> {/* Área fija: Encabezado [cite: 45, 50] */}
      
      <main>
        {children} {/* Aquí se renderiza el contenido específico de cada página [cite: 58] */}
      </main>
      
      <Footer /> {/* Área fija: Pie de página [cite: 45, 53] */}
    </>
  );
}

export default Layout;