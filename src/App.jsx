import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './body.css'
import Header from './componentes/header'
import Presentacion from './componentes/presentacion'

function App() {

  return (
    <>
      <div>
        <body>
        <Header/>
        <main>
       <Presentacion/>
       </main>
       </body>
       
      </div>
    </>
  )
}

export default App
