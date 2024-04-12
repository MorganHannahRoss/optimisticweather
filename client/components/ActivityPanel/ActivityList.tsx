import SingleActivity from './SingleActivity'
import { useActivities } from '../../hooks/useActivities.ts'
import WeatherFilter from './WeatherFilter.tsx'
import React, { useState } from 'react'
import TypeFilter from './TypeFilter.tsx'

function ActivityList() {
  const { data, isPending, isError, error } = useActivities()
  const [selectedWeather, setSelectedWeather] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const handleWeatherChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setSelectedWeather(e.target.value)
  }

  const handleTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedType(e.target.value)
  }

  const filteredActivities = data?.filter(
    (activity) =>
      (selectedWeather ? activity.weather === selectedWeather : true) &&
      (selectedType ? activity.type === selectedType : true),
  )

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
        <TypeFilter onChange={handleTypeChange} />
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
