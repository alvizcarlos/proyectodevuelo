import './componentes/page.css'
import Header from './componentes/header'
import Presentacion from './componentes/presentacion'
import Vuelo from './componentes/presentaciondevuelos'
import Recordatorio from './componentes/recordatorio'

function App() {

  return (
    <>
      <div>
        
        <Header/>
        
       <Presentacion/>
      
       <Vuelo/>

       <Recordatorio/>
       
      </div>
    </>
  )
}

export default App
