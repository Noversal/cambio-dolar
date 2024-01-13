import { usePriceStore } from '../store/useStore'
import { useResultPrice } from '../hooks/useResultPrice'

export default function BoxDolar () {
  const [res] = useResultPrice()
  const clearRes = usePriceStore(state => state.clearRes)

  const styleSpan = {
    position: 'absolute',
    top: '12px',
    right: '15px',
    fontWeight: 700,
    fontSize: '1.3rem'
  }

  return (
    <div className={`calc__res ${res !== '' ? 'visible-box' : ''}`}>
      <button
        style={styleSpan}
        onClick={clearRes}
      >
        X
      </button>
      <div className='calc__res-contain'>
        <span>AR$ </span>
        <span className='calc__res-value'>{res}</span>
      </div>
    </div>
  )
}
