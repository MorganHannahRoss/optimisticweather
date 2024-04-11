import request from 'superagent'
import { Weather } from '../../models/weather'

// const rootURL = '/api/v1/weather'

export async function getWeather(): Promise<Weather> {
  const response = await request.get(
    `https://www.meteosource.com/api/v1/free/point?lat=41S&lon=174E&sections=all&timezone=auto&language=en&units=auto&key=fih69ecqhwqbv51n1vtauic663kn3v40ed36xhyo`,
  )
  return response.body
}
