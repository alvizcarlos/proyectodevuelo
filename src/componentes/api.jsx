import React, { useState } from "react";

function Button() {
    const [datos, setDatos] = useState(null);
  
    const llamarAPI = () => {
      fetch('https://api.aviationstack.com/v1/flights')
        .then(response => response.json())
        .then(data => {
          setDatos(data);
        })
        .catch(error => {
          console.error('Error al llamar a la API:', error);
        });
    };
  
    return (
      <div>
        <button onClick={llamarAPI}>Llamar a la API</button>
        {datos && <div>{JSON.stringify(datos)}</div>}
        
      </div>
      
    );
  }
  
  export default Button;