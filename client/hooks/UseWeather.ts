import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getWeathers } from '../apis/weather.ts'

export function useWeathers() {
  const query = useQuery({ queryKey: ['weathers'], queryFn: getWeathers })
  return {
    ...query,
    // Extra queries go here e.g. addWeather: useAddWeather()
  }
}

export function useWeathersMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['weathers'] })
    },
  })

  return mutation
}

// Query functions go here e.g. useAddWeather
/* function useAddWeather() {
  return useWeathersMutation(addWeather)
} */
