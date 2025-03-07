import SingleActivity from './SingleActivity'
import { useActivities } from '../../hooks/useActivities.ts'
import WeatherFilter from './WeatherFilter.tsx'
import React, { useState } from 'react'
import TypeFilter from './TypeFilter.tsx'
import { useWeatherTypes } from '../App.tsx'

function ActivityList() {
  const { data, isPending, isError, error } = useActivities()
  const { weatherType } = useWeatherTypes()
  const [selectedType, setSelectedType] = useState('')

  const handleTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedType(e.target.value)
  }

  const filteredActivities = data?.filter(
    (activity) =>
      (weatherType ? activity.weather === weatherType : true) &&
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
        <h2>Activities</h2>
        <div className="filter-container">
          <WeatherFilter />
          <TypeFilter onChange={handleTypeChange} />
        </div>
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
