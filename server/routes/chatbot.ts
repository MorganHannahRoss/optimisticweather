import express from 'express'
import { createChatCompletion } from '../chatbot.ts'

const router = express.Router()
export default router

router.post('/', async (req, res) => {
  const { chats, currentLocation, currentWeather } = req.body
  try {
    const chatResponse = await createChatCompletion(
      chats,
      currentLocation,
      currentWeather,
    )

    res.status(200).json(chatResponse)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
