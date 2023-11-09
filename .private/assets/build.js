const linkage = require("./linkage");
const scss = require("./scss");
const arquivo = require("../arquivo");
const { readdirSync } = require("fs");

module.exports = function () {
    arquivo.init();

    console.log("Building...");
    const pages = readdirSync(arquivo.dApp + "/page");
    for (let page of pages) {
        if (page.endsWith(".html")) {
            let ic = linkage(page);
            if (ic) console.log(`Compiled page: ${page}`);
        }
    }

    const dStyle = arquivo.dApp + "/style";
    const styles = readdirSync(dStyle);
    for (let file of styles) {
        if (file.endsWith(".scss")) {
            let ic = scss(file);
            if (ic) console.log(`Compiled style: ${file}`);
        }
        else if (file.endsWith(".css")) {
            let ic = arquivo.fCopy(`${dStyle}/${file}`, `${arquivo.dBuild}/style/${file}`);
            if (ic) console.log(`Copied style: ${file}`);
        }
    }

    const dScript = arquivo.dApp + "/script";
    const scripts = readdirSync(dScript);
    for (let file of scripts) {
        if (file.endsWith(".js")) {
            let ic = arquivo.fCopy(`${dScript}/${file}`, `${arquivo.dBuild}/script/${file}`);
            if (ic) console.log(`Copied script: ${file}`);
        }
    }
}