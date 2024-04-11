import SingleActivity from './SingleActivity'
import { useActivities } from '../../hooks/useActivities.ts'

function ActivityList() {
  const { data, isPending, isError, error } = useActivities()
  const activityData = data

  console.log(data)

  if (isPending) {
    return <p>loading...</p>
  }
  if (isError) {
    return <span>Oops: {error.message}</span>
  }
  return (
    <>
      <div className="activity-card-wrapper">
        <h3>Activities</h3>
        {activityData?.map((item) => (
          <SingleActivity
            key={item.activity_id}
            activity={item.name}
            weather={item.weather}
            type={item.type}
            details={item.optionaldetails}
          />
        ))}
      </div>
    </>
  )
}

export default ActivityList
