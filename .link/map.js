const { map, root } = require("./config.json");
const path = require("path");

const app = path.join(__dirname, "..", map.global.app);
const appPages = path.join(app, map.dev.pages);
const appStyles = path.join(app, map.dev.styles);
const appScripts = path.join(app, map.dev.scripts);

const build = path.join(__dirname, "..", map.global.build);
const buildPages = path.join(build, map.dev.pages);
const buildStyles = path.join(build, map.dev.styles);
const buildScripts = path.join(build, map.dev.scripts);

const fRoot = path.join(app, `${root.name}.${root.tech}`);

module.exports = {
    app,
    appPages,
    appStyles,
    appScripts,
    build,
    buildPages,
    buildStyles,
    buildScripts,
    fRoot
}