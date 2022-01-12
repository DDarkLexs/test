import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"
import fsManager from "../../middleware/fsManage"
import { serverDetail } from "../../assets/data/serverInfo"
const { getDirFilesAndDirs } = fsManager


export default  {
   
    async SendDir(req,res,next){
        try {
            /* console.log(serverDetail.servidor) */
           const data = (await getDirFilesAndDirs(req.query.nome, req.query.nome)) 
            
            res.json(data)
        
        } catch (error) {

            log.error(error)
            res.sendStatus(500)
            
        }
            
        },

        async downloadFile(req,res,next){
            try {
                /* console.log(serverDetail.servidor) */

                res.download(req.query.file)
            
            } catch (error) {
    
                log.error(error)
                res.sendStatus(500)
                
            }
                
            },
    

} 