import { usePriceStore } from '../store/useStore'

export const useResultPrice = () => {
  const res = usePriceStore(state => state.res)

  return [res]
}
