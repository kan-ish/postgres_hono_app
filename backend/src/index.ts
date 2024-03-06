import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
  return c.text('signin route')
})

app.post('/api/v1/blog/', (c) => {
  return c.text('post blog route')
})

app.put('/api/v1/blog/', (c) => {
  return c.text('signin route')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('get blog by id route')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('get all blogs route')
})


export default app
