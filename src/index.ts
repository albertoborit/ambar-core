import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
import AuthRouter from './routes/auth/auth'
dotenv.config()

const port = process.env.PORT

const app = express()

app.use(cors({ origin: ['http://127.0.0.1:5173']}))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/auth', AuthRouter)

app.listen(port, () => {
  console.log(`express server on port ${port}`)
})
