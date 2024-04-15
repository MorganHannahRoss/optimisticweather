import { useQuery } from '@tanstack/react-query'
import { getEvent } from '../../apis/eventfindaApi'
import SingleEvent from './SingleEvent'
import { useWeatherTypes } from '../App.tsx'
import { useEffect } from 'react'

function Events() {
  const { location, setLocation } = useWeatherTypes()
  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ['event'],
    queryFn: () => getEvent(location.lat, location.lon),
  })

  useEffect(() => {
    refetch()
  }, [refetch, location])

  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <div className="loader"></div>
  }

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
