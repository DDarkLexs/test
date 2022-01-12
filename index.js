import express from 'express'
import cors from 'cors'
import fs from 'fs-extra'
import ip from 'ip'
import { homedir } from "os" 
import cookieParser from "cookie-parser"
import session from "express-session"
import { encriptUTF8,encriptBase64 } from "./src/middleware/encript"
import rotas from "./src/routes"
import paraDestino from "./src/middleware/inputFolder"
import ASCIIColorLog from 'ascii-color-log';
import os from "os"

const log = new ASCIIColorLog();
var destino


const app = express()

const PORT = 1111
app.use(cors())



app.use(express.static("src/public"))

 
app.listen(PORT, async () => {
        
        destino = /* "./upload" // */ (await paraDestino.setPath()) || "./upload"
        
        console.clear()
        rotas(app, destino)
        log.info("=============== Orizon ===============")        
        log.info(`Local: 127.0.0.1:${PORT}`)
        log.info(`Rede: ${ip.address()}:${PORT}`)
        log.success(`Destino: ${destino}`)

})
