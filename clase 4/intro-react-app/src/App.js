import logo from './logo.svg';
import './App.css';
import Usuario from './components/Usuario/Usuario';

import ListaDeTareas from './components/Usuario/Tarea/ListaDeTareas';
import Contador from './components/Usuario/contador';
import Saludo from './components/saludo';
import { useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) =>
  {
    setMensaje(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
        type='text'
        placeholder='Ingrese un mensaje'
        value={mensaje}
        onChange={handleChange}/> 
      <Saludo mensaje={mensaje}/>       
      </header>
    </div>
  );
}

// <Usuario nombre="Ruben" /> (lo saque porq no me dejaba ponerlo como comentario)
//        <ListaDeTareas/>
//        <Contador/>


export default App;
