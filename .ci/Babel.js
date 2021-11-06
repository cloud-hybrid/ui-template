const fs = require("fs");

const fileConfig = "node_modules/react-scripts/config/webpack.config.js";

new Promise((resolve) => {
    fs.readFile(fileConfig, "utf8", (err, data) => {
        if ( err ) {
            return console.log(err);
        }
        resolve(data);
    });
}).then((file) => {
    let regexCode = /babelrc: false/g;

    let result = file.replace(regexCode, "babelrc: true");

    fs.writeFile(fileConfig, result, (err) => {
        if ( err ) return console.log(err);
        console.log("Updated ...");
    });
});