import { ActivityData } from '../../../models/activities'
import WeatherFilter from './WeatherFilter'

function SingleActivity({ activity, weather, type, details }: ActivityData) {
  return (
    <div className="activity-card">
      <div className="activity-info">
        <div className="activity-header">
          <h5 className="activity-title title-text">
            <a
              href={`https://www.google.com/search?q=${activity}+near+me`}
              target="blank"
            >
              {activity}
            </a>
          </h5>
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
