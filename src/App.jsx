import './componentes/page.css'
import Header from './componentes/header'
import Presentacion from './componentes/presentacion'
import Vuelo from './componentes/vuelos'
import Recordatorio from './componentes/recordatorio'
import Comentarios from './componentes/Comentarios'
import Destinos from './componentes/Destinos'


function App() {

  return (
    <>
      <div>
        
        <Header/>
        
       <Presentacion/>

       <Destinos/>
      
       <Vuelo/>

       <Recordatorio/>
       
       <Comentarios/>

       <footer>
        <p>&copy; 2024 TravelHub - Derechos Reservados -  alvizcarlos</p>
    </footer>
      </div>
    </>
  )
}

export default App
