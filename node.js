const { exec } = require("child_process")
const promptly = require('promptly');


const validator = function (value) {
    if (value.length < 1) {
        throw new Error('Minimum length is 1');
    }

    return value;
};

(async (value) => {
    const language = await promptly.prompt('Language: ', { validator });

    const input = language.toLowerCase()
    if (input == "nodejs") {
        exec("npm init -y")
        exec('npm set init.author.name "Ssmidge"')
    }

})();
