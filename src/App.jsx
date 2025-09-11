import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const kits = [
    { id: 1, name: "Kit Básico Smart Home", price: 199 },
    { id: 2, name: "Kit Intermedio Oficina", price: 499 },
    { id: 3, name: "Kit Avanzado Residencial", price: 999 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (confirmed) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">✅ ¡Gracias por tu compra!</h1>
        <p>Tu pedido ha sido confirmado y será procesado pronto.</p>
      </div>
    );
  }

  if (checkout) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p>Total a pagar: <strong>${total}</strong></p>
        <button
          onClick={() => setConfirmed(true)}
          className="bg-green-600 text-white px-4 py-2 rounded mt-4"
        >
          Confirmar Pago
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Domoratech</h1>
        <button onClick={() => setCheckout(true)} className="flex items-center gap-2">
          <ShoppingCart /> ({cart.length})
        </button>
      </header>

      <h2 className="text-lg font-semibold mb-4">Nuestros Kits</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {kits.map((kit) => (
          <div key={kit.id} className="border rounded-lg p-4 shadow bg-white">
            <h3 className="font-bold">{kit.name}</h3>
            <p className="text-gray-600 mb-2">${kit.price}</p>
            <button
              onClick={() => addToCart(kit)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold mb-2">Carrito</h2>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{item.name} - ${item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          ))}
          <p className="font-bold mt-2">Total: ${total}</p>
          <button
            onClick={() => setCheckout(true)}
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
          >
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
}
