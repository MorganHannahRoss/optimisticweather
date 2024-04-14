import { useQuery } from '@tanstack/react-query'
import { Location } from '../../models/locations.ts'
import { getWeather } from '../apis/weather.ts'

// Define a hook that accepts a location and returns weather data along with its status
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

// export function useWeathersMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['weather'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddWeather
/* function useAddWeather() {
  return useWeathersMutation(addWeather)
} */
