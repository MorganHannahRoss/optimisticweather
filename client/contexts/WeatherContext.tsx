import React, { createContext, useContext, useState, useEffect } from 'react'

interface WeatherSummaryContextType {
  summary: string
  setSummary: React.Dispatch<React.SetStateAction<string>>
}

const WeatherSummaryContext = createContext<
  WeatherSummaryContextType | undefined
>(undefined)

export const WeatherSummaryProvider: React.FC = ({ children }) => {
  const [summary, setSummary] = useState('')

  return (
    <WeatherSummaryContext.Provider value={{ summary, setSummary }}>
      {children}
    </WeatherSummaryContext.Provider>
  )
}

export function useWeatherSummary() {
  const context = useContext(WeatherSummaryContext)
  if (!context) {
    throw new Error('Not found')
  }

  return context
}
