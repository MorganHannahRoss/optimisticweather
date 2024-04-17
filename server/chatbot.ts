import { OpenAI } from 'openai'
import { Weather } from '../models/weather'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function createChatCompletion(
  chats: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
  location: string,
  weather: Weather,
) {
  try {
    const result = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        {
          role: 'system',
          content: `You are a clothing and activity picking AI for the weather on that day. You can help with various tasks, offering personalized clothing recommendations tailored to the user's preferences and activities. The user is located in ${location}, New Zealand.
          
          The weather details are below:
          ${JSON.stringify(weather, null, 4)}

          If you dont know weather, you can reply with the instruction to pick a location in the search bar in the top right hand corner of the page.
          
          Keep responses to a short single paragraph.`,
        },
        ...chats,
      ],
      max_tokens: 300,
    })

    return {
      output: result.choices[0].message,
    }
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Chatbot completion failed')
  }
}
