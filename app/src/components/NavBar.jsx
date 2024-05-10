import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
  const changeColor = ({ isActive }) =>
    isActive
      ? 'button button__primary button__link'
      : 'button button__secondary button__link'

  return (
    <div className='body'>
      <NavLink className={changeColor} to='/'>
        Calculadora
      </NavLink>

      <NavLink className={changeColor} to='/value'>
        Valores
      </NavLink>
    </div>
  )
}
