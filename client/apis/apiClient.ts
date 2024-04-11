import request from 'superagent'
import { Activity } from '../../models/activities'

const url = '/api/v1/activities'

export const getActivities = async (): Promise<Activity[]> => {
  const res = await request.get(url)
  if (res.ok) {
    return res.body.activities
  }
  throw new Error(res.text)
}
