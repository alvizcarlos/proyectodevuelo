import React from 'react'
import './page.css'
import Cargardestino from './componentes.jsx'




function Vuelo(){


return (
    <>
    <div>
    <section id="busqueda" className="seccion">
            <h1>Búsqueda de Vuelos</h1>
            <label htmlFor="origen">Origen:</label>
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

            <label htmlFor="destino">Destino:</label>
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

            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha"/>
            

            <button onClick={Boolean}>Buscar Vuelos</button>
            <div id="resultadosVuelos" className="resultados"></div>
        </section>
        <section id="destinos" className="seccion">
            <h1>Información de Destinos</h1>
          <div><Cargardestino/></div>
        </section>


    </div>
    
    </>
)



}

export default Vuelo