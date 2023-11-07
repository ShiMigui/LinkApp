const { join } = require("path");
const fs = require("fs");
const file = require("../assets/file");
const { ask, confirm, normalize } = require("../assets/prj");


function createPage(pName = "") {
    try {
        console.log(pName);
        let content = fs.readFileSync(join(__dirname, "../template.html"), { encoding: file.encoding });
        content = content.replace(/PAGENAME/g, pName);
        const fName = normalize(pName).replace(/ /g, "");
        fs.writeFileSync(File("page", fName + ".html"), content, { encoding: file.encoding });
        fs.writeFileSync(File("style", fName + ".scss"), "", {encoding: file.encoding});

        console.log(`Página '${pName}' criada.`);
    } catch (error) {
        console.error(error);
    }
}

function File(fFolder="", fName=""){
    return join(file.dApp, fFolder, fName);
}



(async () => {
    let pName = (await ask("Digite o nome da página: ")).trim();
    let userPermission = 0;
    while (!pName || userPermission != 1) {
        userPermission = await confirm(`Continuar criação?`, true);
        if (userPermission == -1) {
            console.log("Saindo...");
            process.exit(1);
        }
        if (userPermission == 0) pName = await ask("Digite o nome da página: ");
        else{
            let fName = normalize(pName);
            if(!fName){
                console.error("Nome passado não é válido!");
                userPermission=0;
            }
        }
    }
    createPage(pName);
})()