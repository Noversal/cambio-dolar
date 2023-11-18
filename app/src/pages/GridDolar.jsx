import React, { useEffect, useState } from "react";
import { getData } from "../service/getData";

export default function GridDolar() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    getData().then(([data]) => {
      setValue(data)
    }) 
  }, [])
  
  return (<div>
    {value ?
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {value.map(({name, price}) => {
            return (
            <tr key={name}>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
            )
          })}
        </tbody>
      </table>
      : <h1>Cargando ...</h1>}
  </div>);
}
