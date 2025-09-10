import React from 'react'
import { ShoppingCart, Home, Package, Wrench, Phone } from 'lucide-react'

export default function Navbar({count,onOpen}){
  return (
    <nav className="sticky top-0 z-40 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue)] flex items-center justify-center text-white font-bold">DT</div>
          <div>
            <div className="text-lg font-bold" style={{color:'var(--brand-blue)'}}>DomoraTech</div>
            <div className="text-xs text-slate-500">Conecta tu mundo</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#" className="flex items-center gap-2"><Home size={16}/> Inicio</a>
          <a href="#productos" className="flex items-center gap-2"><Package size={16}/> Productos</a>
          <a href="#arma" className="flex items-center gap-2"><Wrench size={16}/> Arma tu kit</a>
          <a href="#contacto" className="flex items-center gap-2"><Phone size={16}/> Contacto</a>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onOpen} className="relative p-2 rounded-lg bg-slate-100 hover:bg-slate-200">
            <ShoppingCart size={20}/>
            {count>0 && <span className="absolute -top-2 -right-2 bg-[var(--brand-green)] text-white text-xs px-2 py-0.5 rounded-full">{count}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}
