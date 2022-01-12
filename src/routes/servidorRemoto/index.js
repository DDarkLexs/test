import fs from "fs-extra"
import path from "path"
import { serverDetail } from "../../assets/data/serverInfo"
import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import remoteServe from "../../controller/remoteServe"
const { SendDir,downloadFile } = remoteServe


export default (app,dest) => {

    (serverDetail.updateDist(dest))
    

    app.route("/servidor")
    .get((req,res,next) => {
        // console.log(serverDetail.servidor.dist)
        next()
    })
    app.route("/servidor/directorio")
    .get((req,res,next) => {    

        // console.log(`procura: ${req.query.nome}`)
        
        next()
    }, SendDir)

    app.route("/servidor/arquivo/baixar")
    .get((req,res,next) => {    
        // console.log(`vai Baixar: ${req.query.file}`)
        next()
    }, downloadFile)
    app.route("/servidor/identidade")
    .get((req,res,next) => {
        // console.log("Acessou a rota de identidade do servidor")
        res.json(serverDetail.servidor)
        next()
    })






}