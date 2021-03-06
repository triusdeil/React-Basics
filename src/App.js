import React from 'react'
import Parrafo from './components/Parrafo'
import Variables from './components/Variables'
import Eventos from './components/Eventos';
import Contador from './components/Contador';
import Listas from './components/Listas';
import Formulario from './components/Formulario';
function App() {
  return (
    <div className="App">
      <h1>Hola Mundo React</h1>
      <Parrafo/>
      <Variables/>
      <Eventos/>
      <Contador/>
      <Listas/>
      <Formulario/>
    </div>
  );
}

export default App;
