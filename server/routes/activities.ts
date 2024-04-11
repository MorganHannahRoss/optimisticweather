import express from 'express'
import * as db from '../db/activities.ts'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  try {
    const activities = await db.getActivities()
    res.json({ activities })
  } catch (err) {
    console.error(`Something went wrong ${err}`)
    res.sendStatus(500)
  }
})
