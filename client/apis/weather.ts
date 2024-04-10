import request from 'superagent'
import { Weather } from '../../models/weather'

const rootUrl = 'https://www.meteosource.com/api/v1/free/point?place_id=london&sections=all&timezone=UTC&language=en&units=metric&key='
// const rootUrl =
//   'https://www.meteosource.com/api/v1/free/point?place_id=NewZealand&lat=41%C2%B0S&lon=174%C2%B0E&sections=all&timezone=NZST&language=en&units=auto&key='
const apiKey = 'fih69ecqhwqbv51n1vtauic663kn3v40ed36xhyo'

export async function getWeather(): Promise<Weather> {
  return await request.get(`${rootUrl}${apiKey}`).then((res) => {
    return res.body
  })
}
