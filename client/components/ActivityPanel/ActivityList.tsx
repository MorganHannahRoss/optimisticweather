import SingleActivity from "./SingleActivity"

const activityData = [{
  activity_id: 1,
  name: 'Fishing 🎣',
  weather: 'sunny ☀️',
  type: 'half day or longer',
  optionaldetails: 'Spend a relaxing day out by the lake fishing.'
}, {
  activity_id: 2,
  name: 'Hiking ⛰️',
  weather: 'overcast 🌥️',
  type: 'full day',
  optionaldetails: 'Make sure to tell someone you are going for a hike!'
}, {
  activity_id: 3,
  name: 'Go see a movie 🍿',
  weather: 'rain 🌧️',
  type: 'short',
  optionaldetails: 'Take a look at whats showing at your local cinema'
}]

function ActivityList() {
  return (
    <>
      <div className="activity-card-wrapper">
        <h3>Activities</h3>
        {activityData.map((item => <SingleActivity activity={item.name} weather={item.weather} type={item.type} details={item.optionaldetails} />))}
      </div>
    </>
  )
}

export default ActivityList