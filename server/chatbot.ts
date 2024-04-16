import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// define the createChatCompletion function
export async function createChatCompletion(
  chats: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
  location: string,
  weather: string,
) {
  try {
    // call the API to generate chat
    const result = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        {
          role: 'system',
          content: `You are a clothing and activity picking AI for the weather on that day. You can help with various tasks, offering personalized clothing recommendations tailored to the user's preferences and activities. The user is located in ${location}, New Zealand, and the weather today is ${weather}. If you dont know weather, you must ask the user to pick a location in the search bar navigation in the top right hand corner. `,
        },
        ...chats,
      ],
      max_tokens: 200,
    })

    // return the chat response
    return {
      output: result.choices[0].message,
    }
  } catch (error) {
    console.error('Error:', error)
    throw new Error('Chatbot completion failed')
  }
}
