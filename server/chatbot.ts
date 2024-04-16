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
          content: `You are a ChatGPT AI. You can help with various tasks. The user is located in ${location}, New Zealand and the weather today is ${weather}`,
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
