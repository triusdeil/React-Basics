import React,{useState} from 'react'

function Contador() {
    const [contador, setContador] = useState(0)

    const aumentar = () =>{
        setContador(contador + 1)
    }

    return (
       <>
        <h2>Contador</h2>
        <h3>numestro numero aumentando: {contador}</h3>
        <h4>{
             contador > 2 ? 'es mayor a 2' : 'es menor a 2' 
            }</h4>
        <button onClick={() => aumentar()}>Contador</button>
       </>
    )
}

export default Contador
