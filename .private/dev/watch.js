require("../assets/build")(true, true, true);
const linkage = require("../assets/linkage");
const scss = require("../assets/scss");
const arquivo = require("../arquivo");
const dApp = arquivo.dApp;
const fs = require('fs');
const path = require('path');

function processFile(file) {
    const filePath = path.join(dApp, file);
    const relativePath = path.relative(dApp, filePath);

    // Ignora o arquivo base.html
    if (file === 'base.html') {
        require("../assets/build")(true);
        return;
    }

    const extension = path.extname(file);
    const fileName = path.basename(file);

    // Obtém o diretório do arquivo
    const fileDirectory = path.dirname(file);

    if (extension === '.html' && fileDirectory === 'page') {
        // Se o arquivo for HTML na pasta "page", linkage
        let ic = linkage(fileName);
        if (ic) console.log(`Compiled page: ${filePath}`);
    } else if (extension === '.scss' && fileDirectory === 'style') {
        // Se o arquivo for SCSS na pasta "style", compilação
        let ic = scss(fileName);
        if (ic) console.log(`Compiled style: ${filePath}`);
    } else {
        // Para outros tipos de arquivos ou pastas diferentes, apenas copie
        const destPath = path.join(arquivo.dBuild, relativePath);
        let ic = arquivo.fCopy(filePath, destPath);
        if (ic) console.log(`Copied: ${relativePath}`);
    }
}

console.log('Observando mudanças em', dApp);

fs.watch(dApp, { recursive: false }, (eventType, filename) => {
    if (eventType === 'change') {
        processFile(filename);
    }
});
