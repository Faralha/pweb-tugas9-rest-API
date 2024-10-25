import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const uniqueToken = "5025231022"

export const config = {
  runtime: 'edge'
}

const app = new Hono()

app.post('/calculate/sum/:numX/:numY', (c) => {
  const { numX, numY } = c.req.param()
  
  const x = parseInt(numX)
  const y = parseInt(numY)

  if (isNaN(x) || isNaN(y)) {
    return c.json({ success: false, data: "Invalid input" }, 400)
  }

  return c.json({ success: true, data: x + y })
})

app.get('/secrets', (c) => {

  const token = c.req.query("token")

  if (token != uniqueToken) {
    return c.json({ success: false, data: "Invalid token" }, 401)
  }

  return c.json({ success: true, data: "Funfact: selama jarkom komputer ga pernah dimatiin selama 4 hari berturut turut"})
})

app.get('/range/:numX/:numY?', (c) => {
  const { numX, numY } = c.req.param()
  const sort = c.req.query("sort")

  let x = parseInt(numX)
  let y = numY ? parseInt(numY) : NaN

  if (isNaN(y)) {
    y = x;
    x = 0;
  }

  const array = []

  for (let i = x; i <= y; i++) {
    array.push(i)
  }

  if (sort == "-1") {
    array.reverse()
  }

  return c.json({ success: true, data: array })
})

app.get('/', (c) => {
  return c.text("This is index.!")
})

export default handle(app)