import React, { useState } from 'react'
import useWeather from '../../hooks/useWeather'
import { Location } from '../../../models/locations'

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

interface locaiton {
  location: Location
}

function WeatherFilter({ onChange }: Props, location: Location) {
  const [weatherLabel, setWeatherLabel] = useState('')

  // const { data } = useWeather(location)

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
