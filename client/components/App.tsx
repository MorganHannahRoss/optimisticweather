import { Outlet } from 'react-router-dom'
import Nav from './Nav/Nav.tsx'
import Header from './Header/Header.tsx'
import WeatherInfo from './WeatherPanel/WeatherInfo.tsx'

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Nav />
          <div className='outlet-container'>
            <Outlet />
          </div>
          <WeatherInfo />
        </div>
      </div>
    </>
  )
}

export default App
