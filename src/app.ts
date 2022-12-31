import express, { Router } from 'express'

const port = process.env.PORT || 3000
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

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
