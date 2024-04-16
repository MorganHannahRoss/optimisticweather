import { ActivityData } from '../../../models/activities'

function SingleActivity({ activity, weather, type, details }: ActivityData) {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <div className="activity-header">
          <h5 className="activity-title">{activity}</h5>
          <div className="activity-tags">
            <span className="activity-tag">{weather}</span>
            <span className="activity-tag">{type}</span>
          </div>
        </div>
      </div>
      <div className="activity-description">
        <p>{details}</p>
      </div>
    </div>
  )
}

export default SingleActivity
