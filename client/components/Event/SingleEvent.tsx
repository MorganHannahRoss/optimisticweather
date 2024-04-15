import { Event } from '../../../models/event'
function SingleEvent({ name, description }): Event {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <div className="activity-header">
          <h5 className="activity-title">{name}</h5>
        </div>
      </div>
      <div className="activity-description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SingleEvent
