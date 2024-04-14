import { useQuery } from '@tanstack/react-query'
import { getEvent } from '../../apis/eventfindaApi'

function EventList() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['event'],
    queryFn: () => getEvent(),
  })
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <div className="loader"></div>
  }
  console.log(data)
  return <h1>Hii</h1>
}

export default EventList
