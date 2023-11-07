const { join } = require("path");
const file = require("../assets/file");
const { watch, mkdirSync, existsSync } = require("fs");
const linkage = require("../assets/linkage");

if (!existsSync(file.dBuild)) mkdirSync(file.dBuild);
if (!existsSync(join(file.dBuild, "style"))) mkdirSync(join(file.dBuild, "style"));
if (!existsSync(join(file.dBuild, "script"))) mkdirSync(join(file.dBuild, "script"));

console.log("Watching...");

watch(file.dApp + "/page", (eName, fName) => {
    if (eName !== 'change') return;
    if (fName.endsWith(".html")) {
        let ic = linkage(fName);
        if (ic) console.log(`Compiled page: ${fName}`);
    }
})

watch(file.dApp + "/style", (eName, fName) => {
    if (eName !== 'change') return;
    if (fName.endsWith(".scss")) {
        let ic = file.scssCompile(fName);
        if (ic) console.log(`Compiled scss: ${fName}`);
    }
})

const dScript = file.dApp + "/script";
if (existsSync(dScript)) {
    watch(dScript, (eName, fName) => {
        if (eName !== 'change') return;
        if (fName.endsWith(".js")) {
            let ic = file.fCopyBuild("script/" + fName);
            if (ic) console.log(`Copied script: ${fName}`);
        }
    })
}