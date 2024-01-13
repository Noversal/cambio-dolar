import { usePriceStore } from '../store/useStore'
import { OptionDolar } from './OptionDolar'
import { useDolar } from '../hooks/useDolar'
import { useState } from 'react'

export default function Form () {
  const calcularValor = usePriceStore(state => state.calcularValor)
  const dolarOptions = useDolar()
  const [valuePrice, setValuePrice] = useState('')

  const obtenerData = (e) => {
    e.preventDefault()

    const values = new FormData(e.currentTarget)
    let dolarInput = values.get('dolar')
    if (!dolarInput) {
      dolarInput = 1
    }

    const option = values.get('valoresDeDolar')
    calcularValor({ dolarInput, option })
  }

  const validateValue = (event) => {
    const { value } = event.target
    if (value.match(/^[1-9]\d*$/)) {
      setValuePrice(value)
    }
  }

  return (
    <form className='form' onSubmit={obtenerData}>
      <select
        className='form__valorDolar'
        name='valoresDeDolar'
        title='Valores de Dolar'
      >
        {
          dolarOptions
            ? dolarOptions.map(({ value, name, key }) => (
              <OptionDolar
                key={key}
                value={value}
                name={name}
              />)
            )
            : (
              <></>)
        }
      </select>
      <label htmlFor='dolar'>Cantidad de Dolares</label>
      <input
        id='dolar'
        name='dolar'
        className='form__dolarPrice'
        value={valuePrice}
        onChange={validateValue}
        type='text'
        placeholder='50,100,150,200 ...'
        title='Cantidad de Dolares'
      />
      <button className='button button__primary'> CALCULAR </button>
    </form>
  )
}
