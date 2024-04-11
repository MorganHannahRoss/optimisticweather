import { useQuery } from '@tanstack/react-query'
import { getActivities } from '../apis/apiClient.ts'

export function useActivities() {
  const query = useQuery({
    queryKey: ['activities'],
    queryFn: () => getActivities()
  })

  return {
    ...query,
  }
}
