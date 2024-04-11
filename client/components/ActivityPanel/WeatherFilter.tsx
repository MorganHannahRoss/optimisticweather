import { ActivityData } from '../../../models/activities'
import { useActivities } from '../../hooks/useActivities'

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
    <select onChange={(e) => onChange(e.target.value)}>
      {weatherOptions.map((weather) => (
        <option key={weather.value} value={weather.value}>
          {weather.label}
        </option>
      ))}
    </select>
  )
}

export default WeatherFilter
