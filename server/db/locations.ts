import connection from './connection'
import { Location } from '../../models/locations'

const db = connection

export const getLocations = () => {
  const allLocations = db<Location>('locations').select('*')
  return allLocations
}
