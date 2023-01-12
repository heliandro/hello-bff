import express, { Router } from 'express'
import multer from 'multer';
import { multerConfiguration } from './multer-configuration';
import { FileMiddleware } from './file-middleware';

const app = express()
const router = Router()

app.use(multer(multerConfiguration.init).single('file'))
app.use(express.json())
app.use(router)

const fileMiddleware = new FileMiddleware(multer, multerConfiguration)

router.get('/hello', (_, res) => res.status(200).json({ message: 'Hi Mom!' }))

router.post('/upload', fileMiddleware.uploadFileHandler)

router.get('/download/:filename', fileMiddleware.downloadFileHandler)

router.get('/healthz', (_, res) => res.status(200).json({ msg: 'Application is running!' }))

export default app