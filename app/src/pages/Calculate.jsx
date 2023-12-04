import Form from "../components/Form";
import { BoxDolar } from "../components/BoxDolar";
import { useDolar } from "../hooks/useDolar";

export default function Calculate() {
  const dolarOptions = useDolar()

  return (
        <main className='calc'>
          <section className='calc__container'>
            {
              dolarOptions &&
                <Form dolarOptions={dolarOptions} />
            }
          </section>
          <section>
            <BoxDolar />
          </section>
        </main>
    )
}
