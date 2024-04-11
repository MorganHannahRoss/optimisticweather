import { ActivityData } from "../../../models/activities"

function SingleActivity({ activity, weather, type, details }: ActivityData) {
  return (
    <>
      <div className="activity-card">
        <div className="activity-info">
          <p>{weather}</p>
          <h5>{activity}</h5>
          <p>{type}</p>
        </div>
        <p>{details}</p>
      </div>
    </>
  )
}

export default SingleActivity
