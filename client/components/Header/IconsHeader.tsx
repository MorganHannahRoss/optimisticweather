import { useQuery } from '@tanstack/react-query'
import { getWeatherForecast } from '../../apis/weather'

function IconsHeader() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeatherForecast(),
  })
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  console.log(data)

  return (
    <>
      <div>
        {data.daily.data.map((_, index) => {
          return (
            <div key={index}>
              <img
                src={`icons/big/${data.current.icon_num}.png`}
                alt={data.current.icon}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default IconsHeader
