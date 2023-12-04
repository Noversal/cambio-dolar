import React, { Suspense, useEffect, useState } from "react";
import { getData } from "../service/getData";
import { regulationMoney } from '../utils.js'
import Spinner from "../components/Spinner.jsx";

export default function GridDolar() {
  const [value, setValue] = useState(null)

  useEffect(() => {
    getData().then(([data]) => {
      setValue(data)
    })
  }, [])
  
  return (
    <>
      {
        value &&
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {value.map(({ name, price }) => {
              const valueRegular = regulationMoney({ money: price })
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td>$ {valueRegular}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </>
 );
}
