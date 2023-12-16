import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
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

    return (
        <div style={style.body}>
            <NavLink style={
            ({ isActive }) => isActive ?
                style.button : {
                color: 'white',
                textDecoration: 'none',
                padding: '13px',}} to='/'>Calculadora</NavLink>
            
            <NavLink style={
            ({ isActive }) => isActive ?
                style.button : {
                color: 'white',
                textDecoration: 'none',
                padding: '13px',
            }}
            to='/value'>Valores</NavLink>
        </div>
  )
}
