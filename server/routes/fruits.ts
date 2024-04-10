import { Router } from 'express'

import * as db from '../db/weatherknex.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const weathers = await db.getAllWeathers()

    res.json({ weathers: weathers.map((weather) => weather.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
