import React, { useEffect, useState } from 'react'
import './page.css'
import Cargardestino from './componentes.jsx'



function Vuelo() {
    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');

    const handleOrigenChange = (event) => {
        setOrigen(event.target.value);
    };

    const handleDestinoChange = (event) => {
        setDestino(event.target.value);
    };

    const handleFechaChange = (event) => {
        setFecha(event.target.value);
    };

    const handleBuscarVuelos = () => {
        const mensaje = `El vuelo de ${origen} hacia ${destino} sale en $300 el día ${fecha}.`;

        document.getElementById("resultadosVuelos").innerText = mensaje;
    };

    return (
        <section id="busqueda" className="seccion">
            <h1>Búsqueda de Vuelos</h1>
            <label htmlFor="origen">Origen:</label>
            <select id="origen" value={origen} onChange={handleOrigenChange} required>
                <option value="" disabled>Selecciona una ciudad</option>
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
            <select id="destino" value={destino} onChange={handleDestinoChange} required>
                <option value="" disabled>Selecciona una ciudad</option>
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
            <input type="date" id="fecha" value={fecha} onChange={handleFechaChange} />

            <button onClick={handleBuscarVuelos}>Buscar Vuelos</button>
            <div id="resultadosVuelos" className="resultados"></div>
        </section>
    );
}
export default Vuelo