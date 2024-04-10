import { Outlet } from 'react-router-dom'
import { useWeathers } from '../hooks/UseWeather.ts'
import Nav from './Nav/Nav.tsx'
import Header from './Header/Header.tsx'
import WeatherInfo from './WeatherPanel/WeatherInfo.tsx'

function App() {
  const { data } = useWeathers()

  return (
    <>
      <div className="app">
        {/* <ul>
          {data && data.map((weather) => <li key={weather}>{weather}</li>)}
        </ul> */}
        <Header />
        <div className="content-wrapper">
          <Nav />
          <Outlet />
          <WeatherInfo />
        </div>
      </div>
    </>
  )
}

export default App
