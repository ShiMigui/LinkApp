const { join } = require("path");
const file = require("../assets/file");
const { mkdirSync, existsSync, readdirSync } = require("fs");
const linkage = require("../assets/linkage");

if (!existsSync(file.dBuild)) mkdirSync(file.dBuild);
if (!existsSync(join(file.dBuild, "style"))) mkdirSync(join(file.dBuild, "style"));
if (!existsSync(join(file.dBuild, "script"))) mkdirSync(join(file.dBuild, "script"));

console.log("Building...");

const pages = readdirSync(join(file.dApp, "page"));
pages.forEach(fName => {
    if (fName.endsWith(".html")) {
        let ic = linkage(fName);
        if (ic) console.log(`Compiled page: ${fName}`);
    }
})

const styles = readdirSync(join(file.dApp, "style"));
styles.forEach(fName => {
    if (fName.endsWith(".scss")) {
        let ic = file.scssCompile(fName);
        if (ic) console.log(`Compiled scss: ${fName}`);
    }
})

const dScript = file.dApp + "/script";
if (existsSync(dScript)) {
    const scripts = readdirSync(dScript);
    scripts.forEach(fName => {
        if (fName.endsWith(".js")) {
            let ic = file.fCopyBuild("script/" + fName);
            if (ic) console.log(`Copied script: ${fName}`);
        }
    })
}