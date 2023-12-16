import { usePriceStore } from '../store/useStore';
import { useResultPrice } from '../hooks/useResultPrice';

export default function BoxDolar() {
  const [res, cajaRes,setCajaRes] = useResultPrice()
  const clearRes = usePriceStore(state => state.clearRes)

  const handleReset = () =>  {
      setCajaRes(false)
      clearRes()
  }
    
    return (
        <div className={`calc__res ${cajaRes ? 'visible-box' : ''}`}>
            <span
            style={{ position: 'absolute', top: '12px', right: '15px', fontWeight: 700, fontSize: '1.3rem' }}
          onClick={handleReset}>X</span>
            <div>
              <p>CONVERSION:</p>
              <p>AR$ {res}</p>
            </div>
        </div>
  )
}
