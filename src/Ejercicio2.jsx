import { useState } from "react";

export default function Ejercicio2() {
  const [formData, setFormData] = useState({
    names: "",
    years: 0,
  });
  const formChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={formChange}>
        <lavel> Nombre: </lavel>
        <input type="text"  />
        <lavel> Years: </lavel>
        <input type="number"  />
        <button >ENVIAR</button>
      </form>ñ
    </div>
  );
}
