import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/domoratech-logo.png" alt="Domoratech" className="h-10" />
        <span className="text-xl font-bold">Domoratech</span>
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Inicio</Link>
        <Link to="/productos" className="hover:text-gray-300">Productos</Link>
        <Link to="/arma-tu-kit" className="hover:text-gray-300">Arma tu kit</Link>
        <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;
