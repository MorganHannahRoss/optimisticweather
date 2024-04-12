import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../../apis/weather'
import { Location } from '../../../models/locations'
import { useEffect } from 'react'

interface WeatherInfoProps {
  location: Location
}

function WeatherInfo(props: WeatherInfoProps) {
  const { location } = props

  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ['swmovies', location.lat, location.lon],
    queryFn: () => {
      console.log(props.location.city)
      return getWeather(location.lat, location.lon)
    },
  })

  useEffect(() => {
    refetch()
  }, [location.lat, location.lon])

  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  return (
    <>
      <div className="weather-card-wrapper">
        <div className="weather-card">
          <p>Hello, WeatherInfo World!</p>
          <p>Current Weather: {data.current.summary}</p>
          <p>Cloud Coverage: {data.current.cloud_cover}% </p>
          <img
            src={`/icons/small/${data.current.icon_num}.png`}
            alt={data.current.icon}
          />
          <p>Precipitation: {data.current.precipitation.type}</p>
          <p>Temperature: {data.current.temperature}°C</p>
          <p>Wind Angle: {data.current.wind.angle}°</p>
          <p>Wind Direction: {data.current.wind.dir}</p>
          <p>Wind Speed: {data.current.wind.speed} KPH</p>
        </div>
      </div>
    </>
  )
}

export default WeatherInfo
