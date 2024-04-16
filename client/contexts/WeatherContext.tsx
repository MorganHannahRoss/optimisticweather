import React, { ReactNode, createContext, useContext, useState } from 'react'

interface WeatherSummaryContextType {
  summary: string
  setSummary: React.Dispatch<React.SetStateAction<string>>
}

const WeatherSummaryContext = createContext<
  WeatherSummaryContextType | undefined
>(undefined)

export const WeatherSummaryProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [summary, setSummary] = useState('')

  return (
    <WeatherSummaryContext.Provider value={{ summary, setSummary }}>
      {children}
    </WeatherSummaryContext.Provider>
  )
}

export function useWeatherSummary() {
  const context = useContext(WeatherSummaryContext)

  return context
}
