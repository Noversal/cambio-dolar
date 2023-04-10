import { useState } from 'react';
import OptionDolar from './components/OptionDolar';
// import json from '../../db/data.json'

const dolarInfo = [
  {name:'DÓLAR 🔵',value:'DÓLAR BLUE',key:1},
  {name:'DÓLAR CDO C/LIQ',value:'DÓLAR CDO C/LIQ',key:2},
  {name:'DÓLAR BNA',value:'DÓLAR BNA',key:3},
  {name:'DÓLAR MEP Contado',value:'DÓLAR MEP Contado',key:4},
  {name:'DÓLAR TARJETA',value:'DÓLAR TARJETA',key:5}
];

function App() {
  const [valueDolar, updateValueDolar] = useState(100)
  const [cambio, setCambio] = useState()
  const [cajaRes, setCajaRes] = useState(false)
  const MONEY_DEFAULT = dolarInfo[1].name


  let json = null
  async function obtenerData(e) {
    e.preventDefault()
    if (!json) {
      json = await import('../../db/data.json')
    }
    console.log(json.default)
    const dolarPrice = Number(json.default[1].price)
    console.log(dolarPrice * valueDolar)
    setCambio(dolarPrice * valueDolar)
    if (!cajaRes) {
      setCajaRes(true)
    }
    e.target.reset()
  }
  
  return (
    <main className='calc'>
      <section className='calc__container'>
        <h1 className='calc__title'>
            <span>Cambio de </span> <span className="green"> Dólares</span>
        </h1>
        <form className='form' onSubmit={obtenerData}>
          <select
            className='form__valorDolar'
            name='valoresDeDolar'
            title='Valores de Dolar'
          >
            <OptionDolar dolarInfo={dolarInfo} />
            
          </select>
          <label htmlFor='dolar'>Cantidad de Dolares</label>
          <input
            value={valueDolar}
            name='dolar'
            className='form__dolarPrice'
            type='text'
            placeholder='50,100,150,200 ...'
            title='Cantidad de Dolares'
            onChange={(e)=> updateValueDolar(Number(e.target.value))}
          />
          <button className='form__button'> CALCULAR </button>
        </form>
      </section>
      {
        cajaRes ? 
        <section className='calc__res'>
        <span
          style={{ position: 'absolute', top: '12px', right: "15px", fontWeight: 700, fontSize: '1.3rem' }}
          onClick={()=> {setCajaRes(false)}}>X</span>
          <div>
            <p>CONVERSION:</p>
            <p>AR$ {cambio}</p>
          </div>
          </section> : 
          <section style={{visibility:'hidden'}}></section>
      }
    </main>
  );
}

export default App;
