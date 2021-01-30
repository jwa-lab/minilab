const chalk = require('chalk');
const figlet = require('figlet');
const gradient = require('gradient-string');
const package = require('../package.json');

module.exports = {
    showBanner() {
        console.log(
            chalk`${ gradient.pastel(figlet.textSync('minilab', { 
                font: 'DOS Rebel'
              })) }
                                                 ${ package.author.name } - v${ package.version }
`
          );
    }
}