import React, {useState} from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CustomKit from './components/CustomKit'
import Cart from './components/Cart'
import { products, customDevices } from './data/products'

export default function App(){
  const [cart,setCart] = useState([])
  const [open,setOpen] = useState(false)

  const addToCart = (item)=>{ setCart([...cart,item]); setOpen(true) }
  const removeFromCart = (index)=> setCart(cart.filter((_,i)=>i!==index))

  return (
    <div>
      <Navbar count={cart.length} onOpen={()=>setOpen(true)} />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <section id="productos" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Kits</h2>
          <ProductList products={products} onAdd={addToCart} />
        </section>
        <section id="arma" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Arma tu Kit</h2>
          <CustomKit devices={customDevices} onAdd={addToCart} />
        </section>
      </main>

      {open && <Cart items={cart} onRemove={removeFromCart} onClose={()=>setOpen(false)} />}
      <footer id="contacto" className="bg-slate-100 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-600">
          © 2025 Domoratech. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
