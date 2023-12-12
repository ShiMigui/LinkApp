const { JSDOM } = require("jsdom");
const { fRoot, appPages, buildPages } = require("../map");
const { encoding } = require("../config.json");
const path = require("path");
const fs = require("fs");

module.exports = function (fName = "") {
    /*
    Check:
    exists root
    exists file_referred (app / fName)

    */

    const rDOM = new JSDOM(fs.readFileSync(fRoot, { encoding })); // DOM from root
    const fDOM = new JSDOM(fs.readFileSync(`${appPages}/${fName}`, { encoding })); // DOM from file_referred
    // Documents
    const rDoc = rDOM.window.document;
    const fDoc = fDOM.window.document;

    rDoc.querySelectorAll("[link]").forEach(el => linkElement(el));
    rDoc.querySelectorAll("[link]").forEach(el => {
        el.removeAttribute("link");
        el.removeAttribute("link-remove");
        el.removeAttribute("link-processed");
    });

    function linkElement(element) {
        // link elements in root with elements in page_referred
        // Checking if element has been linked
        if (element.getAttribute("link-processed") === "true") return;
        element.setAttribute("link-processed", "true");

        // waiting others link elements IN element_root
        element.querySelectorAll("[link]").forEach(el => linkElement(el));

        // Checking if element has no link attribute
        if (!element.getAttribute("link")) return;

        const nmLink = element.getAttribute("link");
        let icRemove = element.hasAttribute("link-remove") && element.getAttribute("link-remove") !== "false";
        // Element in page_referred 
        let fElement = fDoc.querySelector(nmLink);
        // Checking if element in page_referred exists
        if (!fElement) {
            if (icRemove) element.remove();
            return;
        }

        // Checking if elemeent_referred will be removed
        if (fElement.hasAttribute("link-remove") && fElement.getAttribute("link-remove") !== "false") {
            element.remove();
            fElement.remove();
            return;
        }

        element.innerHTML += fElement.innerHTML;
        fElement.remove();


    }

    try {
        fs.writeFileSync(path.join(buildPages, fName), rDOM.serialize(), { encoding });
        console.log(`${fName} linkado`);
    }
    catch (error) {
        console.error(`Não foi possível linkar ${fName}`);
        console.error(error);
    }
};