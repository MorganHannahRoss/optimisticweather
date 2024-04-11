export interface Activity {
  activity_id: number
  name: string
  weather: string
  type: string
  optionaldetails: string
}

export interface ActivityData {
  activity: string
  weather: string
  type: string
  details: string
}

export interface Weather {
  weather: string
}
