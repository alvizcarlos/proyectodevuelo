import React from 'react'
import './page.css'

function Header() {

    return (
      <>
        <div>
            <header>
        <nav>
            <ul>
                <li><a href="#comentarios">Llamado de Api</a></li>
                <li><a href="#busqueda">Búsqueda de Vuelos</a></li>
                <li><a href="#destinos">Información de Destinos</a></li>
                <li><a href="#reservas">Reservas Simples</a></li>
                <li><a href="#recordatorios">Recordatorios de Viaje</a></li>
            </ul>
        </nav></header>
         
        </div>
      </>
    )
  }
  
  export default Header