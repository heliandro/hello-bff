import express, { Router } from 'express'

const app = express()
const router = Router()

router.get('/hello', (_, res) => {
    res.status(200).json({ msg: 'Hi Mom!' })
})

router.get('/healthz', (_, res) => {    
    res.status(200).json({ msg: 'Application is running!' })
})

app.use(express.json())
app.use(router)

export default app
