import PropTypes from 'prop-types'

OptionDolar.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

export function OptionDolar ({ name, value }) {
  return <option value={value}>{name}</option>
}
