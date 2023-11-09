require("../assets/build")();
const linkage = require("../assets/linkage");
const scss = require("../assets/scss");
const { watch } = require("fs");
const arquivo = require("../arquivo");

console.log("Watching...");

const dPage = arquivo.dApp+"/page";
const dStyle = arquivo.dApp+"/style";
const dScript = arquivo.dApp+"/script";

watch(dPage, (event, file)=>{
    if (event !== 'change') return;
    if (file.endsWith(".html")) {
        let ic = linkage(file);
        if (ic) console.log(`Compiled page: ${file}`);
    }
})

watch(dStyle, (event, file)=>{
    if (event !== 'change') return;
    if (file.endsWith(".scss")) {
        let ic = scss(file);
        if (ic) console.log(`Compiled style: ${file}`);
    }
    else if (file.endsWith(".css")) {
        let ic = arquivo.fCopy(`${dStyle}/${file}`, `${arquivo.dBuild}/style/${file}`);
        if (ic) console.log(`Copied style: ${file}`);
    }
})

watch(dScript, (event, file)=>{
    if (event !== 'change') return;
    if (file.endsWith(".js")) {
        let ic = arquivo.fCopy(`${dScript}/${file}`, `${arquivo.dBuild}/script/${file}`);
        if (ic) console.log(`Copied script: ${file}`);
    }
})