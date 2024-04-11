import connection from "./connection";
import { Activity } from '../../models/activities.ts'

const db = connection

export const getActivities = () => {
  const allActivities = db<Activity>('activities').select('*')
  return allActivities
}