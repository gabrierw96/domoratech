import React from 'react'
export default function Cart({items,onRemove,onClose}){
  const subtotal = items.reduce((s,i)=>s+i.price,0)
  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="font-bold">Carrito</h3>
        <button onClick={onClose} className="text-slate-600">Cerrar</button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto space-y-3">
        {items.length===0 ? <p className="text-slate-500">Tu carrito está vacío</p> : items.map((it,idx)=>(
          <div key={idx} className="flex justify-between items-center border rounded p-2">
            <div>
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-slate-500">${it.price}</div>
            </div>
            <div className="flex flex-col items-end">
              <button onClick={()=>onRemove(idx)} className="text-red-500 text-sm">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <div className="font-semibold">Subtotal</div>
          <div className="font-bold">${subtotal}</div>
        </div>
        <button className="w-full bg-[var(--brand-blue)] text-white py-2 rounded">Finalizar compra</button>
      </div>
    </div>
  )
}
