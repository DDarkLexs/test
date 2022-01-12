import upload from "./upload"
import servidorRemoto from "./servidorRemoto"
import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();


export default (app,destino) => {

    upload(app,destino)
    servidorRemoto(app,destino)    
    // log.success("Rotas Prontas")
    
}

