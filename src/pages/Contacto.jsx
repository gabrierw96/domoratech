function Contacto() {
  return (
    <div className="pt-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Contáctanos
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Estamos aquí para resolver tus dudas y asesorarte
      </p>

      <form className="max-w-lg mx-auto mt-10 bg-white shadow-md rounded-2xl p-6 space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Nombre</label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Correo</label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="ejemplo@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Mensaje</label>
          <textarea
            rows="4"
            className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;
