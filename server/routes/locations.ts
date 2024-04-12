import express from 'express'
import * as db from '../db/locations'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  try {
    const locations = await db.getLocations()
    res.json({ locations })
  } catch (err) {
    console.error(`Something went wrong ${err}`)
    res.sendStatus(500)
  }
})
