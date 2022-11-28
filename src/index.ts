import express, { urlencoded, json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(
  cors({
    origin: ['http://localhost'],
    credentials: true
  })
)
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieParser())

app.listen(8000, () => {
  console.log('express server on port 8000')
})
