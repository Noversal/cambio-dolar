import { create } from 'zustand'
import { formaterNumber, regulationMoney } from '../utils'
import { getData } from '../service/getData'

export const usePriceStore = create((set) => ({
  res: '',
  calcularValor: async ({ dolarInput, option }) => {
    const [values] = await getData()
    const money = values.find((value) => value.name === option)

    if (dolarInput === '0') dolarInput = '1'

    const moneyRegalate = regulationMoney({ money: money.price })
    const valueResponse = Number(moneyRegalate) * Number(dolarInput)

    const res = formaterNumber({ value: valueResponse })

    set({ res })
  },
  clearRes: () => set({ res: '' })
}))
