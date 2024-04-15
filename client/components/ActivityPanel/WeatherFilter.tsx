import { useEffect } from 'react'
import { useWeatherTypes } from '../App'

function WeatherFilter() {
  const {weatherType, setWeatherType} = useWeatherTypes()

  const onChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setWeatherType(e.target.value)
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
    if (weatherType && typeof weatherType === 'string') {
      const lowercaseWeather = weatherType.toLowerCase()
      const hasCloudy = lowercaseWeather.includes('cloudy')
      const hasSunny = lowercaseWeather.includes('sunny')
      const hasRain = lowercaseWeather.includes('rain')
      const hasWindy = lowercaseWeather.includes('windy')
      const hasSnow = lowercaseWeather.includes('snow')
      const hasClear = lowercaseWeather.includes('clear')

      if (hasCloudy && weatherType !== 'cloudy') {
        setWeatherType('cloudy')
      } else if (hasSunny && weatherType !== 'sunny') {
        setWeatherType('sunny')
      } else if (hasRain && weatherType !== 'rain') {
        setWeatherType('rain')
      } else if (hasWindy && weatherType !== 'windy') {
        setWeatherType('rain')
      } else if (hasSnow && weatherType !== 'snow') {
        setWeatherType('snow')
      } else if (hasClear && weatherType !== 'clear') {
        setWeatherType('clear')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherType])

  return (
    <div className="filter">
      <select onChange={onChange} value={weatherType || ''}>
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
