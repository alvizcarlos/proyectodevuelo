import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './componentes/page.css'
import Header from './componentes/header'
import Presentacion from './componentes/presentacion'
import Vuelo from './componentes/presentaciondevuelos'

function App() {

  return (
    <>
      <div>
        
        <Header/>
        
       <Presentacion/>
      
       <Vuelo/>
       
      </div>
    </>
  )
}

export default App
