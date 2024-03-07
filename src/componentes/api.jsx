import React, { useState } from "react";

function Button() {
    const [datos, setDatos] = useState(null);
  
    const llamarAPI = () => {
      fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
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
        {datos && <div>{JSON.stringify(datos.name)}</div>}
        
      </div>
      
    );
  }
  
  export default Button;