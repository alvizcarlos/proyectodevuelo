import './page.css'
import React, { useEffect, useState } from 'react';





function Cargardestino() {
    const destinosData = [
        { nombre: "Bogotá", atracciones: ["Monserrate", "Museo del Oro"], alojamiento: ["Hotel Estrella", "Hotel Montaña"] },
        { nombre: "Medellín", atracciones: ["Parque Botero", "Comuna 13"], alojamiento: ["Hotel X", "Hotel Y"] },
        { nombre: "Cali", atracciones: ["Zoológico de Cali", "Monumento a Cristo Rey"], alojamiento: ["Hotel Brillante", "Hotel Dorado"] },
        { nombre: "Cartagena", atracciones: ["Ciudad Amurallada", "Castillo de San Felipe"], alojamiento: ["Hotel Playa Dorada", "Hotel Colonial"] },
        { nombre: "Barranquilla", atracciones: ["Carnaval de Barranquilla", "Museo del Caribe"], alojamiento: ["Hotel Brisas", "Hotel Mar"] },
        { nombre: "Cúcuta", atracciones: ["Parque Santander", "Catedral de San José"], alojamiento: ["Hotel Aurora", "Hotel Sereno"] },
        { nombre: "Bucaramanga", atracciones: ["Parque del Agua", "Casa de Bolívar"], alojamiento: ["Hotel Serenidad", "Hotel Bucaré"] },
        { nombre: "Pereira", atracciones: ["Jardín Botánico Universidad Tecnológica", "Plaza de Bolívar"], alojamiento: ["Hotel Jardín", "Hotel Valle"] },
        { nombre: "Santa Marta", atracciones: ["Parque Nacional Natural Tayrona", "Catedral de Santa Marta"], alojamiento: ["Hotel Maravilla", "Hotel Oasis"] },
        { nombre: "Ibagué", atracciones: ["Jardín Botánico de Ibagué", "Catedral Primada"], alojamiento: ["Hotel Sol Radiante", "Hotel Imperial"] },
      ];
    
      return (
        <div>
          {destinosData.map(destino => (
            <div key={destino.nombre} className="destino-card">
              <h3>{destino.nombre}</h3>
              <p><strong>Atracciones:</strong> {destino.atracciones.join(", ")}</p>
              <p><strong>Alojamiento:</strong> {destino.alojamiento.join(", ")}</p>
            </div>
          ))}
        </div>
      );
  }
  

  
  
  export default Cargardestino

  