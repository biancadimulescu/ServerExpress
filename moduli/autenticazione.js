const {username, password} = require('./instagram_config.json')
const instagram = require('user-instagram');

async function autenticazione(){
   var res = await instagram.authenticate(username, password);
   
    return instagram;
}

module.exports = autenticazione;