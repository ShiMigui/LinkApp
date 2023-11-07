const { join } = require("path");
const fs = require("fs");
const file = require("../assets/file");
const { ask, confirm } = require("../assets/cmd");
const { encoding, spaceChar, lowerPageName } = require("../config.json");


function createPage(pName = "") {
    try {
        let content = fs.readFileSync(join(__dirname, "../template.html"), { encoding });
        content = content.replace(/PAGENAME/g, pName);

        let fName = file.normalizeName(pName).replace(/ /g, spaceChar);
        if (lowerPageName) fName = fName.toLowerCase();

        fs.writeFileSync(File("page", fName + ".html"), content, { encoding });
        fs.writeFileSync(File("style", fName + ".scss"), "", { encoding });

        console.log(`Página '${pName}' criada.`);
    } catch (error) {
        console.error(error);
    }
}

function File(fFolder = "", fName = "") {
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
        else {
            let fName = normalize(pName);
            if (!fName) {
                console.error("Nome passado não é válido!");
                userPermission = 0;
            }
        }
    }
    createPage(pName);
})()