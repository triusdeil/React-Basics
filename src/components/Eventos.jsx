import React,{useState} from 'react'

function Eventos() {
    const [text,setText] = useState('texto desde estado')
    
    const onClick= () =>{
        setText('cambiando el evento')
    }

    return (
        <>
            <hr />
            <h2>{text}</h2>
            <button onClick={() => onClick() }>Click</button>
        </>
    )
}

export default Eventos
