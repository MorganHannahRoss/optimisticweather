import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../../apis/weather'

function WeatherInfo() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['swmovies'],
    queryFn: () => getWeather(),
  })
  console.log(data)
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  // icon
  // temp
  // wind
  // what it feels like
  // houerly weather
  return (
    <>
      <div>
        <p>Hello, WeatherInfo World!</p>
        <p>current weather</p>
        <p>{data.current.cloud_cover}</p>
        <p>{data.current.icon}</p>
        <p>{data.current.icon_num}</p>
        <p>{data.current.precipitation.total}</p>
        <p>{data.current.precipitation.type}</p>
        <p>{data.current.summary}</p>
        <p>{data.current.temperature}</p>
        <p>{data.current.wind.angle}</p>
        <p>{data.current.wind.dir}</p>
        <p>{data.current.wind.speed}</p>
        {/* <h3>Auckland</h3>
        <div>
          <div>🍃</div>
          <p>Windy</p>
          <p>21 degrees</p>
          <p>Temp: 19 low | 21 high</p>
          <p>Wind: 34km/h gusting 65km/h</p>
          <p>UV: Sun protection untill 3pm</p>
          <p>Vis: 16km perfectly clear</p>
        </div> */}
      </div>
    </>
  )
}

export default WeatherInfo
