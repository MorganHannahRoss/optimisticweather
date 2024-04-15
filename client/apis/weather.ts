import request from 'superagent'
import { Weather } from '../../models/weather'

const rootURL = '/api/v1/weather'

export async function getWeather(lat: string, lon: string): Promise<Weather> {
  const response = await request.get(`${rootURL}?lat=${lat}&lon=${lon}`)
  return response.body
}

export async function getWeatherForecast(): Promise<Weather> {
  const response = await request.get(`${rootURL}`)
  return response.body
}
