import connection from '../connection'
import { getActivities } from '../activities'

import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('getActivities', () => {
  it('should show all activities from the database', async () => {
    const allActivities = await getActivities()
    expect(allActivities).toHaveLength(50)
  })
})

afterAll(() => {
  return connection.destroy()
})
