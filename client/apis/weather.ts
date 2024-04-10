import request from 'superagent'
import { Weather } from '../../models/weather'

const rootUrl =
  'https://www.meteosource.com/api/v1/free/point?lat=41S&lon=174E&sections=all&timezone=auto&language=en&units=auto&key='
const apiKey = 'fih69ecqhwqbv51n1vtauic663kn3v40ed36xhyo'

export async function getWeather(): Promise<Weather> {
  return await request.get(`${rootUrl}${apiKey}`).then((res) => {
    return res.body
  })
}
