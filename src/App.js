
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Conocenos/About';
import Contacto from './Components/Contacto/Contacto';
import Hombre from './Components/Hombre/Hombre';
import Inicio from './Components/Inicio/Inicio';
import Mujer from './Components/Mujer/Mujer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/hombre' element={<Hombre/>}/>
          <Route path='/mujer' element={<Mujer/>}/>
          <Route path='/conocenos' element={<About/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </HashRouter>
    
    </div>
  );
}

export default App;
