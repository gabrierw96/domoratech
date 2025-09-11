import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="Domoratech Logo" className="h-10 w-auto" />
        <span className="ml-2 text-xl font-bold">Domoratech</span>
      </Link>
      <div className="space-x-4">
        <Link to="/kits" className="hover:text-gray-300">Kits</Link>
        <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
        <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
      </div>
    </nav>
  );
}
