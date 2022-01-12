import { ReadLine, Interface, createInterface } from "readline";

const rl = createInterface({

    input: process.stdin,
    output: process.stdout

});

export default {

    ask() {

        return new Promise((resolve, reject) => {

            rl.question("Pasta do destino: ", (answer) => {

                resolve(answer)

            })


        })



    },

    async setPath() {
        return new Promise(async (resolve, reject) => {
            var path = ""

                try {

                    path = await this.ask()


                    resolve(path)

                } catch (error) {

                    console.log(error)

            }

        })

        // console.log(path)



    }







}


