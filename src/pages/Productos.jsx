import { ShoppingBag } from "lucide-react";

function Productos() {
  return (
    <div className="pt-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Nuestros Productos
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Explora nuestras soluciones tecnológicas
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {["Laptop Pro", "Servidor Cloud", "Software ERP"].map((producto, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <ShoppingBag className="text-blue-600 mx-auto" size={40} />
            <h3 className="text-xl font-semibold mt-4 text-center">{producto}</h3>
            <p className="text-gray-600 mt-2 text-center">
              Solución diseñada para mejorar la productividad.
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              Ver más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
