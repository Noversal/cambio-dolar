import { useState, useEffect } from 'react'
import { optionsValues } from '../service/getData'

export function useDolar () {
  const [dolarInfo, setInfo] = useState(null)

  useEffect(() => {
    optionsValues().then(data => {
      setInfo(data)
    })
  }, [])

  return dolarInfo
}
