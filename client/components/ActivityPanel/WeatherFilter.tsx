function WeatherFilter({ onChange }) {
  const weatherOptions = [
    { label: 'All Weathers', value: '' },
    { label: 'Cloudy', value: 'cloudy' },
    { label: 'Sunny', value: 'sunny' },
    { label: 'Rain', value: 'rain' },
    { label: 'Clear', value: 'clear' },
    { label: 'Windy', value: 'windy' },
  ]

  return (
    <div className="filter">
      <select onChange={onChange}>
        {weatherOptions.map((weather) => (
          <option key={weather.value} value={weather.value}>
            {weather.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default WeatherFilter
