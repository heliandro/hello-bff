import { Request, Response } from 'express';
import { MulterConfiguration } from './multer-configuration';
import fs from 'fs';

export class FileMiddleware {

    constructor(
        readonly multerModule: any,
        readonly multerConfiguration: MulterConfiguration) {
    }

    public initMulterUploadConfig() {
        return this.multerModule(this.multerConfiguration.init).single('file')
    }

    public uploadFileHandler(request: Request, response: Response) {
        console.log(`File ${request.file?.filename} has uploaded!`)
        response.status(200).json({ message: `File ${request.file?.filename} has uploaded!` })
    }

    public downloadFileHandler(request: Request, response: Response) {
        const { filename } = request.params
        console.log(`File ${filename} has requested to download`)

        if (!fs.existsSync(`${process.env.STORAGE_PATH}/${filename}`)) {
            console.error(`File ${filename} does not exist!`)
            return response.status(404).json({ message: `File ${filename} does not exist!` })
        }

        response.setHeader('Content-Disposition', `attachment; filename=${filename}`)

        const stream = fs.createReadStream(`${process.env.STORAGE_PATH}/${filename}`)
        stream.pipe(response)
    }
}