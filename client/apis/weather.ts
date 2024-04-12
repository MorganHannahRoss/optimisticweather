import request from 'superagent'
import { Weather } from '../../models/weather'

// const rootURL = '/api/v1/weather'

export async function getWeather(lat: string, lon: string): Promise<Weather> {
  const response = await request.get(`https://www.meteosource.com/api/v1/free/point?lat=${lat}S&lon=${lon}E&sections=all&timezone=auto&language=en&units=auto&key=5bhuferyer6wh5mk7s9kexlpu36myifl3gj37bnw`)
  return response.body
}
