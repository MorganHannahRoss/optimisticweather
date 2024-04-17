import { Outlet, useOutletContext } from 'react-router-dom'
import Nav from './Nav/Nav.tsx'
import Header from './Header/Header.tsx'
import WeatherInfo from './WeatherPanel/WeatherInfo.tsx'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Location } from '../../models/locations.ts'
import { Weather } from '../../models/weather.ts'

const auckland = {
  id: 1,
  city: 'Auckland',
  lat: '-36.8406',
  lon: '174.74',
}

function App() {
  const cached = localStorage.getItem('location')
  const parsed = cached !== null ? JSON.parse(cached) : auckland

  const [location, setLocation] = useState<Location>(parsed)
  const [weatherType, setWeatherType] = useState<null | string>(null)
  const [weatherDetails, setWeatherDetails] = useState<null | Weather>(null)

  useEffect(() => {
    localStorage.setItem('location', JSON.stringify(location))
  }, [location])

  return (
    <>
      <div className="app">
        <Header location={location} setLocation={setLocation} />
        <div className="content-wrapper">
          <Nav />
          <div className="outlet-container">
            <Outlet
              context={{
                weatherDetails,
                weatherType,
                setWeatherType,
                location,
                setLocation,
              }}
            />
          </div>
          <WeatherInfo
            setWeatherDetails={setWeatherDetails}
            setWeatherType={setWeatherType}
            location={location}
          />
        </div>
      </div>
    </>
  )
}

export function useWeatherTypes() {
  return useOutletContext<{
    weatherDetails: Weather
    weatherType: null | string
    setWeatherType: Dispatch<SetStateAction<null | string>>
    location: Location
    setLocation: Dispatch<SetStateAction<Location>>
  }>()
}

export default App
