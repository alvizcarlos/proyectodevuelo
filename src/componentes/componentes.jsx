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

  function CargarVuelosSimulados() {
    const [vuelosSimulados, setVuelosSimulados] = useState([]);
  
    useEffect(() => {
      cargarVuelosSimulados();
    }, []);
  
    function cargarVuelosSimulados() {
      const vuelosSimulados = [
        { origen: "Bogotá", destino: "Medellín", precio: 300 },
        { origen: "Bogotá", destino: "Cali", precio: 250 },
        { origen: "Medellín", destino: "Barranquilla", precio: 400 },
        { origen: "Cali", destino: "Cartagena", precio: 350 },
        { origen: "Barranquilla", destino: "Santa Marta", precio: 200 },
        { origen: "Cúcuta", destino: "Bucaramanga", precio: 180 },
        { origen: "Bucaramanga", destino: "Pereira", precio: 280 },
        { origen: "Pereira", destino: "Ibagué", precio: 220 },
        { origen: "Santa Marta", destino: "Cali", precio: 320 },
        { origen: "Ibagué", destino: "Bogotá", precio: 270 },
        // Puedes agregar más vuelos simulados según sea necesario
      ];
  
      setVuelosSimulados(vuelosSimulados);
    }
  
    return (
      <div>
        <select id="seleccionVuelo">
          {vuelosSimulados.map((vuelo, index) => (
            <option key={index} value={index}>
              {`${vuelo.origen} a ${vuelo.destino} - Precio: $${vuelo.precio}`}
            </option>
          ))}
        </select>
      </div>
    );
  }

  function ReservarVuelo() {
    const [vuelosSimulados, setVuelosSimulados] = useState([]);
  
    function reservarVuelo() {
      const vueloIndex = document.getElementById("seleccionVuelo").value;
      const vueloSeleccionado = vuelosSimulados[vueloIndex];
      const infoReserva = document.getElementById("infoReserva");
  
      infoReserva.innerHTML = (
        <div>
          <p>Vuelo de {vueloSeleccionado.origen} a {vueloSeleccionado.destino} reservado. ¡Gracias!</p>
          <p>Precio: ${vueloSeleccionado.precio}</p>
        </div>
      );
    }
  
    return (
      <div>
        <select id="seleccionVuelo">
          {vuelosSimulados.map((vuelo, index) => (
            <option key={index} value={index}>
              {`${vuelo.origen} a ${vuelo.destino} - Precio: $${vuelo.precio}`}
            </option>
          ))}
        </select>
        <button onClick={reservarVuelo}>Reservar</button>
        <div id="infoReserva"></div>
      </div>
    );
  }
  function Buscarvuelos(){
    function buscarVuelos() {
      const origen = document.getElementById("origen").value;
      const destino = document.getElementById("destino").value;
      const fecha = document.getElementById("fecha").value;
  
      const resultadosVuelos = document.getElementById("resultadosVuelos");
      resultadosVuelos.innerHTML = (
        <div>
          <p>Resultados para vuelos de {origen} a {destino} en la fecha {fecha}</p>
          <ul>
            <li>Vuelo 1 - Precio: $300</li>
            <li>Vuelo 2 - Precio: $250</li>
            <li>Vuelo 3 - Precio: $400</li>
          </ul>
        </div>
      );
    }
  
    return (
      <div>
        <input id="origen" type="text" placeholder="Origen" />
        <input id="destino" type="text" placeholder="Destino" />
        <input id="fecha" type="date" />
        <button onClick={buscarVuelos}>Buscar</button>
        <div id="resultadosVuelos"></div>
      </div>
    );
    
  }

  
  
  export default Cargardestino
  export {ReservarVuelo, CargarVuelosSimulados, Buscarvuelos}
  