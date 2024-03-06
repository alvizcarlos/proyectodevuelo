import React from 'react'
import './page.css'


function Vuelo(){

return (
    <>
    <div>
    <section id="busqueda" class="seccion">
            <h1>Búsqueda de Vuelos</h1>
            <label for="origen">Origen:</label>
            <select id="origen" required>
                <option value="" disabled selected>Selecciona una ciudad</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Pereira">Pereira</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Ibagué">Ibagué</option>
            </select>

            <label for="destino">Destino:</label>
            <select id="destino" required>
                <option value="" disabled selected>Selecciona una ciudad</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Pereira">Pereira</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Ibagué">Ibagué</option>
            </select>

            <label for="fecha">Fecha:</label>
            <input type="date" id="fecha"/>
            

            <button onclick={"hola"}>Buscar Vuelos</button>
            <div id="resultadosVuelos" class="resultados"></div>
        </section>
        <section id="destinos" class="seccion">
            <h1>Información de Destinos</h1>
            <div id="destinos-info" class="resultados"></div>
        </section>

        <section id="reservas" class="seccion">
            <h1>Reservas Simples</h1>
            <p>Selecciona tu vuelo:</p>
            <select id="seleccionVuelo"></select>

            <button onclick="reservarVuelo()">Reservar Vuelo</button>
            <div id="infoReserva" class="resultados"></div>
        </section>
    
    </div>
    
    </>
)



}

export default Vuelo