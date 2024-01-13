import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
  const style = {
    button: {
      color: 'white',
      textDecoration: 'none',
      padding: '13px',
      background: 'green',
      borderRadius: '31px'
    },
    body: {
      display: 'flex',
      gap: '7px',
      justifyContent: 'center',
      padding: '20px'
    }
  }

  const changeColor = ({ isActive }) => isActive
    ? 'button button__primary button__link'
    : 'button button__secondary button__link'

  return (
    <div style={style.body}>
      <NavLink
        className={changeColor}
        to='/'
      >
        Calculadora
      </NavLink>

      <NavLink
        className={changeColor}
        to='/value'
      >
        Valores
      </NavLink>
    </div>
  )
}
