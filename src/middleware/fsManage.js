import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();
import fs from "fs-extra"
import path from "path"


export default {

    getDirFilesAndDirs(procura,curDir){
        return new Promise((resolve,reject) => {
 
            const dir = path.join(procura) 

            fs.readdir(dir, {encoding:'utf-8',withFileTypes:true}, (err,files) => {

                if(err) reject(err)

                const item = []


                files.forEach(async file => {
                    
                    // console.log(`${file.name} = ${file.isDirectory()} - ${file.isFile()}`)
                    item.push({
                         name:file.name,
                         tipo:file.isFile()?'file':'dir',
                         icon:file.isFile()?'mdi-cloud-download':'mdi-folder-open',
                         isFile:file.isFile(),
                         isdir:file.isDirectory(),
                     })
             
         
                 
             //   console.log(item)
                 
             })
             
                
                resolve({arquivos:item,currentDir: curDir })


            })



        })


    },


}