import fs from "fs-extra"
import path from "path"
import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import upload from "../../controller/upload"

const { uploadFile } = upload 
import multer from "multer"

export default (app,destino) => {

    const uploadObj = multer({dest: destino})



    app.route("/upload")
    .post(uploadObj.single("file"), (req,res,next) => {



        try {
            
            // console.log(req.headers.origin)
            console.table(req.file)
            //console.log(req.file.mimetype)
            const i = req.file.mimetype.indexOf('/')
            const mime = req.file.mimetype.slice((i+1))
            fs.renameSync(path.join(req.file.path),path.join(`${destino}/${req.file.originalname}`))

    
  
      } catch (error) {

          res.sendStatus(500)

          log.error(error)
      }
          
        next()
        
    },uploadFile)
    






}