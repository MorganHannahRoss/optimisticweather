import { Outlet, useOutletContext } from 'react-router-dom'
import Nav from './Nav/Nav.tsx'
import Header from './Header/Header.tsx'
import WeatherInfo from './WeatherPanel/WeatherInfo.tsx'
import { useState } from 'react'
import { Location } from '../../models/locations.ts'

function App() {
  //prop drill
  const [location, setLocation] = useState<Location>({
    id: 1,
    city: 'Auckland',
    lat: '-36.8406',
    lon: '174.74',
  })

  const [weatherType, setWeatherType] = useState(null as null | string)

  console.log()

  return (
    <>
      <div className="app">
        <Header location={location} setLocation={setLocation} />
        <div className="content-wrapper">
          <Nav />
          <div className="outlet-container">
            <Outlet context={[weatherType, setWeatherType]} />
          </div>
          <WeatherInfo setWeatherType={setWeatherType} location={location} />
        </div>
      </div>
    </>
  )
}

export function useWeatherTypes() {
  return useOutletContext() as [string, (weatherType: string) => void]
}

export default App
