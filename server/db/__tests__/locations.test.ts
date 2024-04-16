import connection from '../connection'
import { getLocations } from '../locations'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getLocations', () => {
  it('should show all locations from the database', async () => {
    const allLocations = await getLocations()
    expect(allLocations).toHaveLength(93)
  })
})

afterAll(() => {
  return connection.destroy()
})
