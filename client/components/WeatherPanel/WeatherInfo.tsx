import { Location } from '../../../models/locations'
import { createContext, useEffect } from 'react'
import useWeather from '../../hooks/UseWeather'
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

  const WeatherContext = createContext(data?.current.temperature)

  if (isError) {
    return (
      <div className="error-message">
        <div className="no-weather-img">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M 2.90625 1.96875 A 1.0001 1.0001 0 0 0 2.78125 2 A 1.0001 1.0001 0 0 0 2.28125 3.71875 L 46.28125 47.71875 A 1.016466 1.016466 0 1 0 47.71875 46.28125 L 33.4375 32 L 36 32 C 41.514 32 46 27.514 46 22 C 46 16.486 41.514 12 36 12 C 34.821 12 33.68575 12.19375 32.59375 12.59375 C 31.32675 8.11975 27.26 5 22.5 5 C 18.165104 5 14.444194 7.6491256 12.84375 11.40625 L 3.71875 2.28125 A 1.0001 1.0001 0 0 0 2.90625 1.96875 z M 22.5 7 C 26.702 7 30.219 10.00425 30.875 14.15625 L 31.09375 15.53125 L 32.34375 14.90625 C 33.49175 14.31125 34.714 14 36 14 C 40.411 14 44 17.589 44 22 C 44 26.411 40.411 30 36 30 L 31.4375 30 L 14.40625 12.96875 C 15.48945 9.5224725 18.700681 7 22.5 7 z M 11.96875 16 C 7.57075 16.016 4 19.598 4 24 C 4 28.411 7.589 32 12 32 L 27.96875 32 L 25.96875 30 L 12 30 C 8.691 30 6 27.309 6 24 C 6 20.691 8.691 18 12 18 C 12.301 18 12.60875 18.03475 12.96875 18.09375 L 14.28125 18.3125 L 11.96875 16 z M 24.875 34 A 1.0001 1.0001 0 0 0 24.28125 34.28125 L 22.28125 36.28125 A 1.016466 1.016466 0 1 0 23.71875 37.71875 L 25.71875 35.71875 A 1.0001 1.0001 0 0 0 24.875 34 z M 13.875 35 A 1.0001 1.0001 0 0 0 13.28125 35.28125 L 11.28125 37.28125 A 1.016466 1.016466 0 1 0 12.71875 38.71875 L 14.71875 36.71875 A 1.0001 1.0001 0 0 0 13.875 35 z M 32.28125 36.3125 L 31.28125 37.28125 C 30.89025 37.67225 30.89025 38.32775 31.28125 38.71875 C 31.47625 38.91375 31.744 39 32 39 C 32.256 39 32.52375 38.91375 32.71875 38.71875 L 33.6875 37.71875 L 32.28125 36.3125 z M 19.875 39 A 1.0001 1.0001 0 0 0 19.28125 39.28125 L 17.28125 41.28125 A 1.016466 1.016466 0 1 0 18.71875 42.71875 L 20.71875 40.71875 A 1.0001 1.0001 0 0 0 19.875 39 z M 8.875 40 A 1.0001 1.0001 0 0 0 8.28125 40.28125 L 6.28125 42.28125 A 1.016466 1.016466 0 1 0 7.71875 43.71875 L 9.71875 41.71875 A 1.0001 1.0001 0 0 0 8.875 40 z M 28.875 40 A 1.0001 1.0001 0 0 0 28.28125 40.28125 L 26.28125 42.28125 A 1.016466 1.016466 0 1 0 27.71875 43.71875 L 29.71875 41.71875 A 1.0001 1.0001 0 0 0 28.875 40 z" />
          </svg>
        </div>
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
