const { encoding, excludeFiles } = require("../config.json");
const { join } = require("path");
const map = require("../map");
const fs = require("fs");
const sass = require("sass");

/**
 * Copia arquivo da pasta '/app' para '/build'
 * @param fPath Recebe o caminho relativo do arquivo e copia da pasta '/app' para '/build'
*/
function fCopyBuild(fPath = "") {
    try {
        fs.copyFileSync(join(map.app, fPath), join(map.build, fPath));
        console.log(`Arquivo '${fPath}' copiado com sucesso!`);
        return true;
    }
    catch (error) {
        console.error(`Arquivo '${fPath}' não pôde ser copiado!`);
        console.error(error);
        return false;
    }
}

function scssCompile(fName = "") {
    try {
        const content = sass.compile(path.join(arq.app, fRelativePath)).css;
        fs.writeFileSync(join(map.build, fName.replace(".scss", ".css")), content, { encoding });
        console.log(`Arquivo compilado: '${fName}'`);
        return true;
    }
    catch (error) {
        console.log(`Arquivo não pôde ser compilado: '${fName}'`);
        console.error(`Ocorreu um erro: '${error}'`);
        return false;
    }
}

function checkIfExcludes(fName = "") {
    for (let item of excludeFiles) if (fName.includes(item)) return true;
    return false;
}

module.exports = {
    checkIfExcludes,
    scssCompile,
    fCopyBuild
}