import { Link } from "react-router-dom";
import { Cpu, Smartphone, Shield } from "lucide-react";

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Bienvenido a DomoraTech
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Soluciones tecnológicas que impulsan el crecimiento de tu empresa 🚀
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/productos"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Ver Productos
            </Link>
            <Link
              to="/contacto"
              className="border border-white px-6 py-3 rounded-xl hover:bg-blue-500 transition"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios / Productos destacados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Nuestros Servicios</h2>
          <p className="text-gray-600 mt-2">
            Ofrecemos soluciones innovadoras para cada necesidad
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition">
              <Cpu className="mx-auto text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mt-4">Hardware</h3>
              <p className="text-gray-600 mt-2">
                Equipos y componentes de última generación.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition">
              <Smartphone className="mx-auto text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mt-4">Software</h3>
              <p className="text-gray-600 mt-2">
                Aplicaciones y sistemas para optimizar procesos.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition">
              <Shield className="mx-auto text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mt-4">Seguridad</h3>
              <p className="text-gray-600 mt-2">
                Protegemos tu infraestructura digital con confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          ¿Listo para llevar tu empresa al siguiente nivel?
        </h2>
        <p className="mt-2 text-lg">
          Contáctanos y comienza a transformar tu negocio con DomoraTech.
        </p>
        <Link
          to="/contacto"
          className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Hablar con un asesor
        </Link>
      </section>
    </div>
  );
}

export default Home;
