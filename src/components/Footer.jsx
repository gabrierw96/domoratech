import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* Logo + descripción */}
        <div>
          <h2 className="text-xl font-bold text-white">DomoraTech</h2>
          <p className="mt-2 text-sm">
            Innovación tecnológica al alcance de tu negocio.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold text-white">Enlaces</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-blue-400">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-blue-400">Productos</Link></li>
            <li><Link to="/nosotros" className="hover:text-blue-400">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-400">Contacto</Link></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="font-semibold text-white">Síguenos</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} DomoraTech. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
