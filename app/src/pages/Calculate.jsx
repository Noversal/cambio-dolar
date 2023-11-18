import { useEffect, useState } from "react";
import Form from "../components/Form";

export default function Calculate() {
  const [cambio, setCambio] = useState(0)
  const [cajaRes, setCajaRes] = useState(false)

  useEffect(() => {
    function action(e) {
      const { boxState, res } = e.detail

      setCajaRes(boxState)
      setCambio(res)
    }

    document.body.addEventListener('cambio', action)
    
    return () => {
      document.body.removeEventListener('cambio', action)
    }
  },[])
    
    
    return (
      <main className='calc'>
        <section className='calc__container'>
          <Form />
        </section>
        <section className={`calc__res ${cajaRes ? 'visible-box' : ''}`}>
          <span
            style={{ position: 'absolute', top: '12px', right: "15px", fontWeight: 700, fontSize: '1.3rem' }}
            onClick={()=> {setCajaRes(false)}}>X</span>
            <div>
              <p>CONVERSION:</p>
              <p>AR$ {cambio}</p>
            </div>
        </section>
      </main>
    )
}
