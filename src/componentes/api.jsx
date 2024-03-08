import React, { useState } from "react";
import './page.css'

function Button() {
    const [datos, setDatos] = useState([]);
  
    const llamarAPI = () => {
      fetch('https://prod-25.brazilsouth.logic.azure.com:443/workflows/dc866b2a095d4663a962a344e2e551b7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1RIcAOjxcT78W9hNYl6KvodMaObbty8aBeFWzNYToIM')
        .then(response => response.json())
        .then(data => {
          setDatos(data);
        })
        .catch(error => {
          console.error('Error al llamar a la API:', error);
        });
    };

    const renderTabla = () => {
      return (
        <table className="Tabla">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Numero de Naves</th>
                <th>Misiones</th>
                <th>Total De Aeronaves</th>
            </tr>
        </thead>
        <tbody>
            {datos.filter(item => item.Versiones && item.Versiones.length > 0).map((item, index) => (
                <tr key={index}>
                    <td>{item.Nombre}</td>
                    <td>{item.Versiones}</td>
                    <td>{item.Mision}</td>
                    <td>{item.Total}</td>
                </tr>
            ))}
        </tbody>
    </table>
      );
    };
  
    return (
      <div>
        <button onClick={llamarAPI}>Llamar a la API</button>
        {datos.length > 0 && renderTabla()}
      </div>
    );
  }
  
  
  
  export default Button;