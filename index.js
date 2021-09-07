const colors = require('colors');
const time = new Date();

function info(message = 'logs-js',appName = 'logs',version = '1.0.0'){


    console.log(colors.underline.green.bold('log: info'))
    console.log(`msg: ${message}, appName: ${appName},version: ${version},time: ${time}`.green)
}

function warn(message = 'logs-js',appName = 'logs',version = '1.0.0'){


    console.log(colors.underline.yellow.bold('log: info'))
    console.log(`msg: ${message}, appName: ${appName},version: ${version},time: ${time}`.yellow)
}

function error(message = 'logs-js',appName = 'logs',version = '1.0.0'){


    console.log(colors.underline.red.bold('log: info'))
    console.log(`msg: ${message}, appName: ${appName},version: ${version},time: ${time}`.red)
}

module.exports = {
    info,
    warn,
    error
}