import Form from '../components/Form';
import BoxDolar  from '../components/BoxDolar';

export default function Calculate() {
  return (
        <main className='calc'>
          <section className='calc__container'>
            <Form />
          </section>
          <section>
            <BoxDolar />
          </section>
        </main>
    )
}
