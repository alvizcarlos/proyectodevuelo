import React from 'react'
import './page.css'
import Button from './api'

function Presentacion() {

    return (
      <>
       <div><main>
       <section id="presentacion" class="seccion">
            <h1>Bienvenidos a TravelHub</h1>
            <p>Encuentra y reserva los mejores vuelos para tus próximos viajes. Explora destinos emocionantes,
                realiza reservas simples y comparte tus experiencias con otros viajeros. ¡Comienza tu aventura con
                TravelHub!</p>
        </section>


        <section id="comentarios" class="seccion">

            <h1>Llamado de Api</h1>
            
            <div><Button/></div>
            

          
        </section>
        </main>
       </div>
         
       
      </>
    )
  }
  
  export default Presentacion

