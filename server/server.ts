import express from 'express'
import * as Path from 'node:path'
import weatherRoutes from './routes/weather'
import activityRoutes from './routes/activities.ts'
import locationsRoutes from './routes/locations.ts'
import chatbotRoutes from './routes/chatbot.ts'

import eventRoutes from './routes/eventfinda.ts'
const server = express()

server.use(express.json())

server.use('/api/v1/weather', weatherRoutes)
server.use('/api/v1/activities', activityRoutes)
server.use('/api/v1/locations', locationsRoutes)
server.use('/api/v1/chatbot', chatbotRoutes)
server.use('/api/v2/eventfinda', eventRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
