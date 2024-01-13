import Form from '../components/Form'
import BoxDolar from '../components/BoxDolar'

export default function Calculate () {
  return (
    <main className='calc'>
      <section className='calc__container'>
        <h1 className='calc__title'>
          <span>Cambio de </span> <span className='green'> Dólares</span>
        </h1>
        <Form />
      </section>
      <section>
        <BoxDolar />
      </section>
    </main>
  )
}
