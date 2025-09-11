iimport { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DomoraTech
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
          <li><Link to="/productos" className="hover:text-blue-600">Productos</Link></li>
          <li><Link to="/nosotros" className="hover:text-blue-600">Nosotros</Link></li>
          <li><Link to="/contacto" className="hover:text-blue-600">Contacto</Link></li>
        </ul>

        {/* Botón Hamburguesa */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
            <li><Link to="/productos" onClick={() => setIsOpen(false)}>Productos</Link></li>
            <li><Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link></li>
            <li><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
