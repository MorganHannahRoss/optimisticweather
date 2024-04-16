import { useState } from 'react'
import ChatResponse from '../../../models/chats'
import { useWeatherSummary } from '../../contexts/WeatherContext'
import { useWeatherTypes } from '../App'

interface Chat {
  role: string
  content: string
}

function AIPopup() {
  const weatherContext = useWeatherSummary()
  const { location } = useWeatherTypes()
  const [message, setMessage] = useState('')
  const [chats, setChats] = useState<Chat[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const chat = async (e: React.FormEvent<HTMLFormElement>, message: string) => {
    e.preventDefault()

    if (!message) return
    setIsTyping(true)

    setMessage('')

    const allChats = [...chats, { role: 'user', content: message }]

    setChats(allChats)

    try {
      const response = await fetch('/api/v1/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chats: allChats,
          currentWeather: location || '',
          currentLocation: location.city || '',
        }),
        //above for personalised message responses -> currentWeather: '', currentLocation: ''
      })

      const data: ChatResponse = await response.json()
      const chatResponse = data.output

      setChats([...allChats, chatResponse])
      console.log([...allChats, chatResponse])
      setIsTyping(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <main>
      <h2>Chat AI </h2>

      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === 'user' ? 'user_msg' : ''}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ''}
      </section>

      <div className={isTyping ? '' : 'hide'}>
        <p>
          <i>{isTyping ? 'Chatbot Typing...' : ''}</i>
        </p>
      </div>

      <form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  )
}

export default AIPopup
