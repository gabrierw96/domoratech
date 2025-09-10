import React from 'react'

export default function ProductList({products,onAdd}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p=> (
        <div key={p.id} className="bg-white rounded-2xl shadow p-4 flex flex-col">
          <img src={p.img} alt={p.name} className="w-full h-40 object-contain mb-3"/>
          <h3 className="font-semibold text-lg">{p.name}</h3>
          <p className="text-sm text-slate-500 mb-2">{p.desc}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="font-bold text-xl text-[var(--brand-green)]">${p.price}</div>
            <button onClick={()=>onAdd(p)} className="bg-[var(--brand-blue)] text-white px-4 py-2 rounded-lg">Agregar</button>
          </div>
        </div>
      ))}
    </div>
  )
}
