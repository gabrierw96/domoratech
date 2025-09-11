function Nosotros() {
  return (
    <div className="pt-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Sobre Nosotros
      </h1>
      <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
        En <span className="font-semibold">DomoraTech</span> somos apasionados por la
        tecnología y la innovación. Nuestro objetivo es brindar soluciones que ayuden
        a empresas y personas a crecer en la era digital.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600">Misión</h2>
          <p className="text-gray-600 mt-2">
            Proporcionar soluciones tecnológicas accesibles y efectivas que impulsen la
            transformación digital de nuestros clientes.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-blue-600">Visión</h2>
          <p className="text-gray-600 mt-2">
            Ser líderes en innovación tecnológica en América Latina, contribuyendo al
            éxito y crecimiento de empresas de todos los tamaños.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
