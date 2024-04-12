import request from 'superagent'
import { Activity } from '../../models/activities'
import { Location } from '../../models/locations'

const url = '/api/v1/'

export const getActivities = async (): Promise<Activity[]> => {
  const res = await request.get(`${url}activities`)
  if (res.ok) {
    return res.body.activities
  }
  throw new Error(res.text)
}

export const getLocations = async (): Promise<Location[]> => {
  const res = await request.get(`${url}locations`)
  if (res.ok) {
    return res.body.locations
  }
  throw new Error(res.text)
}
