import connection from './connection.ts'
import { Weather } from '../../models/weather.ts'

export async function getAllWeathers(db = connection): Promise<Weather[]> {
  return db('weather').select()
}
