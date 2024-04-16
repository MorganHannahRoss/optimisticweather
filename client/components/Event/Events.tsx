import { useQuery } from '@tanstack/react-query'
import { getEvent } from '../../apis/eventfindaApi'
import SingleEvent from './SingleEvent'

function Events() {
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
  console.log(data.events[0])
  return (
    <>
      <div className="activity-card-wrapper">
        <h3>Events</h3>
        {data.events.map((event) => (
          <SingleEvent
            key={event.id}
            name={event.name}
            description={event.description}
          />
        ))}
      </div>
      
    </>
  )
}

export default Events
