import React, { useState } from "react";

export default function Formulario() {
  const [fruta, setFruta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setLista] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!fruta.trim()) {
      console.log("esta vacio");
      return;
    }
    if (!descripcion.trim()) {
      console.log("esta vacio");
      return;
    }
    console.log("procesando datos" + fruta + descripcion);
    setLista([
      ...lista,
      { nombreFruta: fruta, nombreDescripcion: descripcion },
    ]);
    e.target.reset();
    setFruta("");
    setDescripcion("");
    console.log(setLista);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese Fruta"
          className="form-control mb-2"
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese Descripcion"
          className="form-control mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.nombreFruta} - {item.nombreDescripcion}
          </li>
        ))}
      </ul>
    </div>
  );
}
