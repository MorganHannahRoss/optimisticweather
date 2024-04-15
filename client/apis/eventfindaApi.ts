import request from 'superagent'
import { Event } from '../../models/event'

const rootURL = '/api/v2/eventfinda'

export async function getEvent(lat: string, lon: string): Promise<Event> {
  const response = await request.get(`${rootURL}?lat=${lat}&lon=${lon}`)
  return response.body
}
