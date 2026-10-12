import process from 'node:process'
import { serve } from '@hono/node-server'
import app from './server'

const port = Number(process.env.PORT) || 3000

serve(
  {
    fetch: app.fetch,
    port
  },
  (info) => {
    console.info(`Server is running on http://localhost:${info.port}`)
  }
)
