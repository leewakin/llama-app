const url = 'https://api.atomecho.cn/v1/chat/completions'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer sk-831e2ffc630cd5a97604781bf9a6fe72'
  }
}

export default defineEventHandler(async event => {
  const params = await readBody(event)
  console.log('params:', params)

  try {
    const res = await fetch(url, {
      ...options,
      body: JSON.stringify({
        model: 'Atom-7B-Chat',
        messages: params.messages ?? [],
        temperature: 0.3,
        stream: false
      })
    })
    return (await res.json())?.choices
  } catch (error) {
    if (error instanceof Error) {
      return createError('Error: ' + error.message)
    }
    return createError(error ? error.toString() : 'Unknown error')
  }
})
