function OptionDolar({name, value}) {
  return (
    <>
      <option value={value}>{name}</option>
    </>
  );
}
  

export default ({ dolarInfo }) => {
  return dolarInfo && dolarInfo.map(({ value, name, key }) =>
    <OptionDolar
      key={key}
      value={value}
      name={name}
    />
  );
};
 