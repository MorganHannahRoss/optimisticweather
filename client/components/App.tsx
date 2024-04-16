import { Outlet, useOutletContext } from 'react-router-dom'
import Nav from './Nav/Nav.tsx'
import Header from './Header/Header.tsx'
import WeatherInfo from './WeatherPanel/WeatherInfo.tsx'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Location } from '../../models/locations.ts'

function App() {
  const [location, setLocation] = useState<Location>("[]" as unknown as Location)
  const [weatherType, setWeatherType] = useState<null | string>(null)

  useEffect(() => {
    const existing = JSON.parse(
      localStorage.getItem('location') ?? "[]"
    )
    if (existing !== '[]') {
      setLocation(existing)
      return
    }
    setLocation({
      id: 1,
      city: 'Auckland',
      lat: '-36.8406',
      lon: '174.74',
    })
  }, []);

  return (
    <>
      <div className="app">
        <Header location={location} setLocation={setLocation} />
        <div className="content-wrapper">
          <Nav />
          <div className="outlet-container">
            <Outlet context={{weatherType, setWeatherType, location, setLocation}} />
          </div>
          <WeatherInfo setWeatherType={setWeatherType} location={location} />
        </div>
      </div>
    </>
  )
}

export function useWeatherTypes() {
  return useOutletContext<{
    weatherType: null | string;
    setWeatherType: Dispatch<SetStateAction<null | string>>;
    location: Location;
    setLocation: Dispatch<SetStateAction<Location>>
  }>()
}

export default App
