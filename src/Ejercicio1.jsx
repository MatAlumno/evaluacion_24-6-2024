import { useState } from "react"

export default function Ejercicio1() {
  const [selectData, setSelectData] = useState('');
  const dataChange = (event) => {
    setSelectData(event.target.value);
    alert(event.target.value);
  };
  return (
    <div>
      <h1>Ejercicio 1: Lista desplegable</h1>

      <label>Seleccione una fruta: </label>

      <select onChange={dataChange}>
        <option value="Manzana"> Manzana </option>
        <option value="Pera"> Pera </option>
        <option value="Naranja"> Naranja </option>
        <option value="Mandarina"> Mandarina </option>
      </select>
    </div>
  );
}
