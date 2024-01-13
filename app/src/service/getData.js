const URL = 'https://api-dolar-t0jy.onrender.com/api/v1'
export function getData () {
  return fetch(`${URL}/dolar`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw res
    })
    .then((data) => {
      const { results, date } = data
      return [results, date]
    })
}

export async function optionsValues () {
  const [data] = await getData()
  const dolarValues = data.map(({ name }) => {
    return {
      name,
      value: name,
      key: crypto.randomUUID()
    }
  })
  return dolarValues
}
