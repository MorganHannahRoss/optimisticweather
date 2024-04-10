import { useWeathers } from '../hooks/UseWeather.ts'

function App() {
  const { data } = useWeathers()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Weather!</h1>
        <ul>
          {data && data.map((weather) => <li key={weather}>{weather}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
