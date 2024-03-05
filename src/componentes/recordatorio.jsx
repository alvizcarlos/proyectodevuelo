import React from 'react'
import './page.css'

function Recordatorio() {

    return (
      <>
        <div>
            <main>
        <section id="recordatorios" class="seccion">
            <h1>Recordatorios de Viaje</h1>
            <ul id="listaRecordatorios" class="resultados">
                <li>Recuerda realizar el check-in para tu vuelo a Bogotá el 15 de marzo.</li>
                <li>Asegúrate de llevar contigo los documentos de viaje, incluyendo tu pasaporte y tarjeta de embarque.</li>
                <li>Verifica las restricciones de equipaje y las políticas de la aerolínea antes de tu vuelo.</li>
                <li>Consulta el clima en tu destino y lleva la ropa adecuada.</li>
                <li>No olvides cargar completamente tus dispositivos electrónicos antes del vuelo.</li>
            </ul>
        </section>
        
        <section id="comentarios" class="seccion">
            <h1>Comentarios de Usuarios</h1>
            <label for="nombre">Nombre:</label>
            <textarea id="comentario" placeholder="Deja tu comentario..."></textarea>
            <button onclick="enviarComentario()">Enviar Comentario</button>
            <ul id="listaComentarios" class="resultados"></ul>
        </section>
        
    

    <footer>
        <p>&copy; 2024 TravelHub - Derechos Reservados -  alvizcarlos</p>
    </footer>
         </main>
        </div>
      </>
    )
  }
  
  export default Recordatorio