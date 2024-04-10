import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../../apis/weather'

function WeatherInfo() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['swmovies'],
    queryFn: () => getWeather(),
  })
  console.log(data?.current.summary)
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }
  return (
    <>
      <div>
        <p>Hello, WeatherInfo World!</p>
      </div>
    </>
  )
}

export default WeatherInfo
