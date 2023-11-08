const { dApp, dBuild, fCreate } = require("./file");
const { encoding } = require("../config.json");
const { JSDOM } = require("jsdom");
const path = require("path");
const fs = require("fs");
const { normalize, join } = require("path");

let domIndex, domPage;
let docIndex, docPage;
const attLink = ["link", "link-processed", "link-remove"];

function htmlLinkage(fName = "") {
    const fPath = path.join(dApp, "page", fName);

    try {
        domIndex = new JSDOM(fs.readFileSync(path.join(dApp, "base.html"), { encoding }));
        domPage = new JSDOM(fs.readFileSync(fPath, { encoding }));
    }
    catch (error) {
        console.error(error);
        return false;
    }
    docIndex = domIndex.window.document, docPage = domPage.window.document;

    let links = docIndex.querySelectorAll("[link]:not([link] [link])");
    for (let elLink of links) carregarElemento(elLink);

    let elTabs = docIndex.querySelector("tab-list");
    if (elTabs) tabsCreate(elTabs);

    links = docIndex.querySelectorAll("[" + attLink.join("], [") + "]");
    for (let el of links) for (let att of attLink) el.removeAttribute(att);

    let strContent = domIndex.serialize();
    strContent = strContent.replace(/FILENAME/g, fName.replace(".html", ""));
    return fCreate(fName, dBuild, strContent);
}

function carregarElemento(elIndex) {
    if (!elIndex) return;
    if (elIndex.getAttribute("link-processed") === "true") return;
    elIndex.setAttribute("link-processed", "true");

    const nm = elIndex.getAttribute("link");
    if (!nm) return;
    const elPage = docPage.querySelector(nm);
    if (elPage == null) return;

    const ic = elPage.hasAttribute("link-remove") ? elPage.getAttribute("link-remove") : elIndex.getAttribute("link-remove");
    if (ic === 'true') {
        elIndex.remove();
        elPage.remove();
        return;
    }

    let childs = elIndex.querySelectorAll("[link]");
    childs.forEach(el => carregarElemento(el));

    for (let i = 0; i < elPage.attributes.length; i++) {
        const attribute = elPage.attributes[i];
        elIndex.setAttribute(attribute.name, attribute.value);
    }
    elIndex.innerHTML = elIndex.innerHTML + elPage.innerHTML;
    elPage.remove();
}

function tabsCreate(el) {
    let tabs = el.getAttribute("tabs");
    if (!tabs) return;
    tabs = tabs.split("+");

    for (let nmTab of tabs) {
        const tab = docIndex.createElement("tab");
        tab.setAttribute("href", normalize(nmTab));
        tab.innerText = nmTab;
        el.appendChild(tab);
    }
}

module.exports = htmlLinkage;