import React from 'react'
import './page.css'
import React, { useEffect, useState } from 'react';

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

  function CargarVuelosSimulados(){

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

  function EnviarComentario() {
    const [comentario, setComentario] = useState('');
    const [comentarios, setComentarios] = useState([]);
  
    function enviarComentario() {
      const nuevoComentario = comentario;
      setComentarios([...comentarios, nuevoComentario]);
      setComentario('');
  
      alert(`Comentario enviado: ${nuevoComentario}`);
    }
  
    return (
      <div>
        <input
          id="comentario"
          type="text"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Escribe tu comentario"
        />
        <button onClick={enviarComentario}>Enviar</button>
        <ul id="listaComentarios">
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
      </div>
    );
  }

  function CargarRecordatorios() {
    return (
      <div>
        <ul id="listaRecordatorios">
          <li>Recuerda realizar el check-in para tu vuelo a Bogotá el 15 de marzo.</li>
          <li>Asegúrate de llevar contigo los documentos de viaje, incluyendo tu pasaporte y tarjeta de embarque.</li>
          <li>Verifica las restricciones de equipaje y las políticas de la aerolínea antes de tu vuelo.</li>
          <li>Consulta el clima en tu destino y lleva la ropa adecuada.</li>
          <li>No olvides cargar completamente tus dispositivos electrónicos antes del vuelo.</li>
        </ul>
      </div>
    );
  }

  function CargarComentariosSimulados() {
    const comentariosSimulados = [
      { nombre: "Juan", contenido: "¡Excelente servicio! El vuelo fue cómodo y puntual.", fecha: "2024-02-16", hora: "12:30 PM" },
      { nombre: "María", contenido: "Me encantó la atención del personal de la aerolínea. ¡Muy profesionales!", fecha: "2024-02-16", hora: "01:45 PM" },
      { nombre: "Carlos", contenido: "Los destinos ofrecen una experiencia única. Recomiendo visitar Medellín.", fecha: "2024-02-16", hora: "03:00 PM" },
      { nombre: "Ana", contenido: "Reservé mi vuelo de forma sencilla. ¡Todo salió como esperaba!", fecha: "2024-02-16", hora: "04:20 PM" },
      { nombre: "Pedro", contenido: "Viajé con mi familia y todos disfrutamos del viaje. Gracias TravelHub.", fecha: "2024-02-16", hora: "05:45 PM" },
      // Puedes agregar más comentarios según sea necesario
    ];
  
    return (
      <div>
        <ul id="listaComentarios">
          {comentariosSimulados.map((comentario, index) => (
            <li key={index}>
              <p>
                <strong>{comentario.nombre}</strong>
              </p>
              <p>{comentario.contenido}</p>
              <p>
                <em>Publicado el {comentario.fecha} a las {comentario.hora}</em>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  document.addEventListener('DOMContentLoaded', function () {
    cargarDestinos();
    cargarRecordatorios();
    cargarVuelosSimulados();
    cargarComentariosSimulados();
});

function EnviarComentario() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);

  function enviarComentario() {
    // Obtén la fecha y hora actual del cliente
    const fechaHoraCliente = new Date().toLocaleString();

    const nuevoComentario = {
      nombre: nombreUsuario,
      contenido: comentario,
      fechaHora: fechaHoraCliente,
    };

    setComentarios([...comentarios, nuevoComentario]);
    setNombreUsuario('');
    setComentario('');
  }

  return (
    <div>
      <input
        id="nombre"
        type="text"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
        placeholder="Nombre"
      />
      <input
        id="comentario"
        type="text"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        placeholder="Comentario"
      />
      <button onClick={enviarComentario}>Enviar</button>
      <ul id="listaComentarios">
        {comentarios.map((comentario, index) => (
          <li key={index}>
            <p>
              <strong>{comentario.nombre}</strong>
            </p>
            <p>{comentario.contenido}</p>
            <p>
              <em>Publicado el {comentario.fechaHora}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}





  
  export default {Cargardestino, CargarVuelosSimulados, Buscarvuelos, ReservarVuelo, EnviarComentario, CargarRecordatorios, CargarComentariosSimulados}