import { getData } from '../service/getData'
import { formaterNumber, regulationMoney } from '../utils'
import { OptionDolar } from  './OptionDolar'


const stateCambio = new CustomEvent('cambio', { detail: { boxState: true, res: '' } })

export default function Form({ dolarOptions }) {

    const calcularValor = async ({ dolarInput, option }) => {
        const [values] = await getData()
        const money = values.find((value) => value.name === option)
        
        if (dolarInput === '0') dolarInput = '1'
        const moneyRegalate = regulationMoney({money: money.price})
        const valueResponse = Number(moneyRegalate) * Number(dolarInput)
      
        const res = formaterNumber({value:valueResponse})

        return res
      }

    const obtenerData = async (e) => {
        e.preventDefault()
    
        const values = new FormData(e.currentTarget)
        let dolarInput = values.get('dolar')
        if (!dolarInput) {
            dolarInput = 1
        }

        const option = values.get('valoresDeDolar')
        const res = await calcularValor({ dolarInput, option })

        stateCambio.detail.res = res
        document.body.dispatchEvent(stateCambio)
    }
    
    return (
    <>
        <h1 className='calc__title'>
            <span>Cambio de </span> <span className="green"> Dólares</span>
        </h1>
        <form className='form' onSubmit={obtenerData}>
            <select
                className='form__valorDolar'
                name='valoresDeDolar'
                title='Valores de Dolar'
            >
            { dolarOptions.map(({ value, name, key }) => (
                <OptionDolar
                    key={key}
                    value={value}
                    name={name}
                />)
            )}
            </select>
        <label htmlFor='dolar'>Cantidad de Dolares</label>
        <input
            name='dolar'
            className='form__dolarPrice'
            type='text'
            placeholder='50,100,150,200 ...'
            title='Cantidad de Dolares'
        />
        <button className='form__button'> CALCULAR </button>
            </form>
    </>
    )
}
