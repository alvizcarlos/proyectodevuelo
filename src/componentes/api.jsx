import React, { useState } from "react";

function Button() {
    const [datos, setDatos] = useState([]);
  
    const llamarAPI = () => {
      fetch('https://prod-25.brazilsouth.logic.azure.com:443/workflows/dc866b2a095d4663a962a344e2e551b7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1RIcAOjxcT78W9hNYl6KvodMaObbty8aBeFWzNYToIM')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setDatos(data);
        })
        .catch(error => {
          console.error('Error al llamar a la API:', error);
        });
    };
  
    return (
      <div>
        <button onClick={llamarAPI}>Llamar a la API</button>
        {datos.map(item=>{
          return(
            <div>
              {item.Nombre}
            </div>
          )
        }) }
        
      </div>
      
    );
  }
  
  
  
  export default Button;