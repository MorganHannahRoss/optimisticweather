import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../apis/apiClient.ts'

export function useLocations() {
  const query = useQuery({
    queryKey: ['locations'],
    queryFn: () => getLocations(),
  })

  return {
    ...query,
  }
}
