import React from 'react'
import './page.css'

let vuelosSimulados=[];

document.addEventListener('DOMContentLoaded', function () {
    cargarDestinos();
    cargarRecordatorios();
    cargarVuelosSimulados();
});

function Cargardestino() {
    const destinosData = [
        { nombre: "Bogotá", atracciones: ["Monserrate", "Museo del Oro"], alojamiento: ["Hotel Estrella", "Hotel Montaña"] },
        { nombre: "Medellín", atracciones: ["Parque Botero", "Comuna 13"], alojamiento: ["Hotel X", "Hotel Y"] },
        // Resto de los datos de destino
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