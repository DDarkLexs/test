import os from "os"

export  const serverDetail = {
    servidor:{
        dist:"",
        homeDir:os.homedir(),
        servidorNome:os.hostname(),
        usuario:os.userInfo({encoding:"utf8"}).username,
        plataforma: os.platform(),
        arq:os.arch(),
        processador:os.cpus()[0].model, 
        time:new Date()
    },
    updateDist(dir){

        this.servidor.dist = dir

    }
}