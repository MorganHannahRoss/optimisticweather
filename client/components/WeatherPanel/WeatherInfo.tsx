import { Location } from '../../../models/locations'
import { useEffect } from 'react'
import useWeather from '../../hooks/useWeather.ts'
import LocationDetails from './LocationDetails'
import DayOfWeek from './DayOfWeek'

interface WeatherInfoProps {
  location: Location
}

function WeatherInfo(props: WeatherInfoProps) {
  const { location } = props
  const { isPending, isError, data, refetch } = useWeather(location)

  useEffect(() => {
    refetch()
  }, [location.lat, location.lon])

  console.log(data)

  if (isError) {
    return <p>Something went wrong</p>
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
              <LocationDetails />
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
