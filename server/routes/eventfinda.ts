import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const username = process.env.USERNAME
const password = process.env.PASSWORD

router.get('/', async (req, res, next) => {
  try {
    const eventfinda = await request
      .get(
        `https://api.eventfinda.co.nz/v2/events.json?point=-41.2924,174.7787&radius=5`,
      )
      .set('Authorization', 'Basic ' + btoa(username + ':' + password))

    res.json(eventfinda.body)
  } catch (error) {
    res.sendStatus(500)
    next(error)
  }
})

export default router
