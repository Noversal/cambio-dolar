import { useEffect, useState } from 'react';
import { usePriceStore } from '../store/useStore';

export const useResultPrice = () => {
    const res = usePriceStore(state => state.res)
    const [cajaRes, setCajaRes] = useState(false)
    
    useEffect(() => {
      if (cajaRes) return 
      
      if (res !== '') {
        setCajaRes(true)
      }
      
    }, [res])
  
    return [res, cajaRes, setCajaRes]
  }