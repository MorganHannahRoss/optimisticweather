import { useQuery } from '@tanstack/react-query'
import { Location } from '../../models/locations.ts'
import { getWeather } from '../apis/weather.ts'

function useWeather(location: Location) {
  const { lat, lon } = location

  const query = useQuery({
    queryKey: ['weather', location.lat, location.lon],
    queryFn: () => getWeather(lat, lon),
  })

  return {
    ...query,
  }
}

export default useWeather
