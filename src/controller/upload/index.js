import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import { encriptUTF8,encriptBase64 } from "../../middleware/encript"
import cookie from "../../middleware/cookie"

export default  {
   
    async uploadFile(req,res,next){


        log.success(`Sucesso!`)
        res.json(true)    
  
    },



} 