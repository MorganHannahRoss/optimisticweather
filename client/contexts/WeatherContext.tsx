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
  // if (!context) {
  //   throw new Error('Not found')
  // }
  // removing this error message because the AI wont work with it on with no location selected

  return context
}
