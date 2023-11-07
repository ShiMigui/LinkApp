const { encoding, dBuildName } = require("../config.json");
const sass = require("sass");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..", "..");
const dApp = path.join(root, "app");
const dBuild = path.join(root, dBuildName);

function fCreate(fName = "", fDir = dBuild, fContent = "") {
    try {
        fs.writeFileSync(path.join(fDir, fName), fContent, { encoding });
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

function normalizeName(inputString) {
    const cleanedString = inputString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return cleanedString.replace(/[^\w\s]/gi, '');
}

function scssCompile(fName = "") {
    const result = sass.compile(path.join(dApp, "style", fName), { style: 'compressed' });
    return fCreate(fName.replace(".scss", ".css"), path.join(dBuild, "style"), result.css);
}

function fCopyBuild(fName = "", fDir = dApp) {
    try {
        fs.copyFileSync(path.join(fDir, fName), path.join(dBuild, fName));
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {
    dApp,
    dBuild,
    normalizeName,
    fCopyBuild,
    scssCompile,
    fCreate
}