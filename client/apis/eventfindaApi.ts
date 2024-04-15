import request from 'superagent'
import { Event } from '../../models/event'

const rootURL = '/api/v2/eventfinda'

export async function getEvent(): Promise<Event> {
  const response = await request.get(`${rootURL}`)
  return response.body
}
