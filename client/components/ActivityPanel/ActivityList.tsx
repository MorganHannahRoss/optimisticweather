import SingleActivity from './SingleActivity'
import { useActivities } from '../../hooks/useActivities.ts'
import WeatherFilter from './WeatherFilter.tsx'
import React, { useState } from 'react'

function ActivityList() {
  const { data, isPending, isError, error } = useActivities()
  const [selectedWeather, setSelectedWeather] = useState('')

  const handleWeatherChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setSelectedWeather(e.target.value)
  }

  const filteredActivities = selectedWeather
    ? data?.filter((activity) => activity.weather === selectedWeather)
    : data

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
        <WeatherFilter onChange={handleWeatherChange} />
        {filteredActivities?.map((item) => (
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
