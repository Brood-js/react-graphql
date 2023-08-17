const Country = ({ country }) => {
  if (country === null) {
    return null
  }
  return (
    <div>
      <h2>Pais</h2>
      {country.map(c => (
        <div key={c.code}>
          {' '}
          {c.name} {c.continent.name}
        </div>
      ))}
    </div>
  )
}

export default Country
