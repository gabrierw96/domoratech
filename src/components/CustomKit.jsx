import React from 'react'

export default function CustomKit({devices,onAdd}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {devices.map(d=> (
        <div key={d.id} className="p-4 bg-white rounded-xl shadow flex flex-col items-center">
          <img src={d.img} alt={d.name} className="h-20 mb-2"/>
          <div className="font-medium">{d.name}</div>
          <div className="text-[var(--brand-green)] font-bold mb-2">${d.price}</div>
          <button onClick={()=>onAdd(d)} className="bg-[var(--brand-blue)] text-white px-3 py-1 rounded">Agregar</button>
        </div>
      ))}
    </div>
  )
}
