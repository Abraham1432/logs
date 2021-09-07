const { name,version } = require('./package.json');
const colors = require('colors');
const time = new Date();


const warn = (message) =>{

    console.log(colors.underline.yellow.bold('log: warn'))
    console.log(`msg: ${message},appName: ${name},version: ${version},time: ${time}`.yellow)

}

const info = (message) =>{

    console.log(colors.underline.green.bold('log: info'))
    console.log(`msg: ${message},appName: ${name},version: ${version},time: ${time}`.green)
}

const error = (message) =>{

    console.log(colors.underline.red.bold('log: error'))
    console.log(`msg: ${message},appName: ${name},version: ${version},time: ${time}`.red)

}


module.export = {

    warn,
    info,
    error

}