import { useEffect } from 'react'
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

  useEffect(() => {
    if (selectedWeather && typeof selectedWeather === 'string') {
      const lowercaseWeather = selectedWeather.toLowerCase()
      const hasCloudy = lowercaseWeather.includes('cloudy')
      const hasSunny = lowercaseWeather.includes('sunny')
      const hasRain = lowercaseWeather.includes('rain')
      const hasWindy = lowercaseWeather.includes('windy')
      const hasSnow = lowercaseWeather.includes('snow')
      const hasClear = lowercaseWeather.includes('clear')

      if (hasCloudy && selectedWeather !== 'cloudy') {
        setSelectedWeather('cloudy')
      } else if (hasSunny && selectedWeather !== 'sunny') {
        setSelectedWeather('sunny')
      } else if (hasRain && selectedWeather !== 'rain') {
        setSelectedWeather('rain')
      } else if (hasWindy && selectedWeather !== 'windy') {
        setSelectedWeather('rain')
      } else if (hasSnow && selectedWeather !== 'snow') {
        setSelectedWeather('snow')
      } else if (hasClear && selectedWeather !== 'clear') {
        setSelectedWeather('clear')
      }
    }
  }, [selectedWeather])

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
