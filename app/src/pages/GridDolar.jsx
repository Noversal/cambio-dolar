import React, { useEffect, useState } from 'react'
import { getData } from '../service/getData'
import { regulationMoney } from '../utils.js'
import Arrow from '../components/Arrow'
// import Graph from '../components/Graph.jsx'

export default function GridDolar () {
  const [value, setValue] = useState([])

  useEffect(() => {
    getData().then(([data]) => {
      setValue(data)
    })
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th> </th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {
          value.length !== 0 &&
            value.map(({ name, price }) => {
              const valueRegular = regulationMoney({ money: price })
              return (
                <tr key={name}>
                  <td>{name}</td>
                  <td> <Arrow className='icon' /> </td>
                  <td style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>$ {valueRegular} {/* <button> <Graph className='icon' /> </button> */}</td>
                </tr>
              )
            })
        }
      </tbody>
    </table>
  )
}
