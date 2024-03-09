import React from "react";
import './page.css'
import Cargardestino from "./componentes";


function Destinos(){
    return(
        <section id="destinos" className="seccion">
            <div className="textoCentrado">
                <h1>Información de Destinos</h1>
            </div>
            <div><Cargardestino/></div>
          
  
        <div id="destinos-info" className="resultados"></div>
    </section>
    )
}

export default Destinos;