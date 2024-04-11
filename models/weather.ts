<<<<<<< HEAD
export interface Weather {
  lat: string
  lon: string
  elevation: number
  timezone: string
  units: string
  current: Current
  hourly: Hourly
  daily: Daily
}

export interface Current {
  icon: string
  icon_num: number
  summary: string
  temperature: number
  wind: Wind
  precipitation: Precipitation
  cloud_cover: number
}

export interface Precipitation {
  total: number
  type: string
}

export interface Wind {
  speed: number
  angle: number
  dir: string
}

export interface Daily {
  data: DailyDatum[]
}

export interface DailyDatum {
  day: Date
  weather: string
  icon: number
  summary: string
  all_day: AllDayElement
  morning: null
  afternoon: null
  evening: null
}

export interface AllDayElement {
  weather: string
  icon: number
  temperature: number
  temperature_min?: number
  temperature_max?: number
  wind: Wind
  cloud_cover: CloudCover
  precipitation: Precipitation
  date?: Date
  summary?: string
}

export interface CloudCover {
  total: number
}

export interface Hourly {
  data: AllDayElement[]
}
=======
>>>>>>> main
