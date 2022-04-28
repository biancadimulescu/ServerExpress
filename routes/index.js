var express = require('express');
var router = express.Router();
const path = require("path");
const autenticazione = require("../moduli/autenticazione");
//const instagram = require('user-instagram');
const port = 3000;



router.get('/', function(req, res, next) {

    autenticazione().then((instagram) => {
      if((req.query.id)!=undefined){
        instagram.getUserData(req.query.id).then(userData => {
          if ((userData.isPrivate())==true){
                  console.log(`My account is private .`);
                  console.log(`If u dont follow me you cant acess some informations .`);
          }
      
          console.log(`My username is ${userData.getUsername()}.`);
          console.log(`\nBiography \n${userData.getBiography()}.`); 
          console.log(`\nNumero di Post:  ${userData.getPublicationsCount()}.`);  
          console.log(`\nNumero di follower: ${userData.getFollowersCount()}.`);   
          console.log(`\nNumero di seguiti  ${userData.getFollowingCount()}.`); 
          console.log(`\n ${userData.getProfilePicture()}`)
         
      
          res.render('result', { title: "fakeinstagram",utente: userData.getUsername(),
          bio: userData.getBiography(),
          npost: userData.getPublicationsCount(),
          nfollower: userData.getFollowersCount(),
          nfollowing: userData.getFollowingCount(),
          profilepicture: userData.getProfilePicture()
        });
        })
      }
      else {
      res.render('index', { title: "fakeinstagram"});
      }
    })

});




module.exports = router;
