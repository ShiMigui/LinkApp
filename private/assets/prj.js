const { createInterface } = require("readline");

function ask(question = "") {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

function normalize(inputString) {
    const cleanedString = inputString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return cleanedString.replace(/[^\w\s]/gi, '');
}

async function confirm(question = "", includeCancel = false) {
    let Opts = includeCancel ? "(s/n/cancel) " : "(s/n) ";
    const asking = (await ask(question + Opts)).toString().toLowerCase().trim();
    if (asking == "cancel") return -1;
    else if (asking == "n") return 0;
    else return 1;
}

module.exports = {
    ask,
    normalize,
    confirm,
}