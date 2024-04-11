import { ActivityData } from '../../../models/activities'
import { useActivities } from '../../hooks/useActivities'

function WeatherFilter() {
  const { data, error } = useActivities()
  const activityData = data

  return <h1>Hey</h1>
}

export default WeatherFilter
