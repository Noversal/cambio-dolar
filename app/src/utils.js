export function formaterNumber({ value }) {
    let res = value.toString()
    if (res.includes('.')) {
      if (res.split('.')[1].length < 2) {
        res += '0'
      }
  }
  return res
}