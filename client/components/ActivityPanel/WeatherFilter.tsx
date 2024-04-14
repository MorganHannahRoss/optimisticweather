import { useWeatherTypes } from '../App'

function WeatherFilter() {
  const [selectedWeather, setSelectedWeather] = useWeatherTypes()

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedWeather(e.target.value)
  }

  const weatherOptions = [
    { label: 'All Weathers', value: '' },
    { label: 'Cloudy', value: 'cloudy' },
    { label: 'Sunny', value: 'sunny' },
    { label: 'Rain', value: 'rain' },
    { label: 'Clear', value: 'clear' },
    { label: 'Windy', value: 'windy' },
    { label: 'Snow', value: 'snow' },
  ]

  return (
    <div className="filter">
      <select onChange={onChange} value={selectedWeather || ''}>
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
