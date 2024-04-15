import { Location } from '../../../models/locations'
import { createContext, useEffect } from 'react'
import useWeather from '../../hooks/UseWeather'
import LocationDetails from './LocationDetails'
import DayOfWeek from './DayOfWeek'

interface WeatherInfoProps {
  location: Location
  setWeatherType: (weather: string) => void
}

function WeatherInfo(props: WeatherInfoProps) {
  const { location, setWeatherType } = props
  const { isPending, isError, data, refetch } = useWeather(location)

  useEffect(() => {
    refetch()
  }, [location.lat, location.lon])

  useEffect(() => {
    if (data?.current.summary) {
      setWeatherType(data.current.summary)
    }
  }, [data?.current.summary])

  const WeatherContext = createContext(data?.current.temperature)

  if (isError) {
    return (
      <div>
        <p>unable to load weather</p>
      </div>
    )
  }

  if (isPending) {
    return <div className="loader"></div>
  }
  const dailyData = data.daily.data

  return (
    <>
      <div className="weather-card-wrapper">
        <div className="weather-card">
          <img
            className="weather-background"
            src="../client/images/placeholder.jpg"
            alt="background"
          />

          <div className="weather-info-container">
            <div className="summary-text">
              <LocationDetails location={location} />
            </div>
            <p className="temperature-text">{data.current.temperature}°C</p>
            <div className="weather-icon-container">
              <p className="summary-text">{data.current.summary}</p>
              <img
                className="weather-icon"
                src={`/icons/small/${data.current.icon_num}.png`}
                alt={data.current.icon}
              />
            </div>
            {dailyData.map((day, index) => (
              <div key={index} className="weekly-weather-container">
                <p>
                  {new Date(day.day).toLocaleDateString('en-US', {
                    weekday: 'long',
                  })}
                </p>
                <div className="weekly-info-container">
                  <p>{day.all_day.temperature}°C</p>
                  <img
                    className="weather-icon"
                    src={`../../icons/small/${day.icon}.png`} // this needs fixing
                    alt={data.current.icon}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherInfo
