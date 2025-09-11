export default function Kits() {
  const kits = [
    { id: 1, name: "Kit Básico", description: "Iluminación inteligente + enchufes WiFi", price: "$99" },
    { id: 2, name: "Kit Seguridad", description: "Cámaras + sensores de movimiento", price: "$199" },
    { id: 3, name: "Kit Premium", description: "Control total del hogar", price: "$299" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Nuestros Kits</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {kits.map((kit) => (
          <div key={kit.id} className="border p-4 rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold">{kit.name}</h3>
            <p className="text-gray-600">{kit.description}</p>
            <p className="mt-2 font-bold">{kit.price}</p>
            <a
              href="/checkout"
              className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Comprar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
