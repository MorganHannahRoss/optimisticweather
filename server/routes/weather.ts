import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const weatherApiKey = process.env.WEATHER_API_KEY

router.get('/', async (req, res, next) => {
  try {
    const lat = req.query.lat || '41S'
    const lon = req.query.lon || '174E'

    const weather = await request.get(
      `https://www.meteosource.com/api/v1/free/point?lat=${lat}&lon=${lon}&sections=all&timezone=auto&language=en&units=auto&key=${weatherApiKey}`,
    )

    res.json(weather.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

router.get('/location', async (req, res, next) => {
  try {
    const lat = req.query.lat || '41S'
    const lon = req.query.lon || '174E'
    const location = await request.get(
      `https://www.meteosource.com/api/v1/free/nearest_place?lat=${lat}&lon=${lon}&key=${weatherApiKey}`,
    )

    res.json(location.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
