import fs from "fs";
import { Request } from "express";
import multer from "multer";
import { v4 as uuid } from 'uuid';

type MulterConfiguration = {
    init: multer.Options | any
}

class CustomMulterConfiguration {

    private getExtension = (filename: string): string => {
        return filename?.split('.').pop() || ''
    }

    private fileFilter(allowedExtensions: string[]) {
        return (request: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
            const extension = this.getExtension(file.originalname)

            if (extension && !allowedExtensions.includes(extension)) {
                console.error(`File extension ${extension} is not allowed!`)
                cb(null, false)
            }
            cb(null, true)
        }
    }

    private storage(urlStoragePath: string): multer.StorageEngine {
        return multer.diskStorage({
            destination: (request: Request, file: Express.Multer.File, cb) => {
                if (!fs.existsSync(urlStoragePath))
                    console.error(`Storage path ${urlStoragePath} does not exist!`)
                cb(null, urlStoragePath)
            },
            filename: (request: Request, file: Express.Multer.File, cb) => {
                const extension = this.getExtension(file.originalname)
                const filename = `${new Date().getFullYear()}_${uuid()}.${extension}`
                cb(null, filename)
            }
        })
    }

    get init(): multer.Options | any {
        const storagePath = process.env.STORAGE_PATH || 'storage'
        const allowedExtensions = process.env.ALLOWED_FILE_EXTENSIONS?.split(",") || ['png']
        console.log(`Allowed extensions: ${allowedExtensions}`)
        return {
            storage: this.storage(storagePath),
            fileFilter: this.fileFilter(allowedExtensions)
        }
    }
}

const multerConfiguration = new CustomMulterConfiguration()
export { multerConfiguration, MulterConfiguration }