import { Router } from 'express'
import { login } from './authController'

const AuthRouter = Router()

AuthRouter.post('/login', async (req, res) => {
    res.json({"response":(await login(req.body)).data})
})

export default AuthRouter
