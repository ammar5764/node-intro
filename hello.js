const fs = require('fs');
//process.stdin.on('data', (data) => {
  //  const name = data.toString().trim().toUpperCase();
   // if (name !== '') {
      fs.writeFileSync(`./notes.txt`, `My name is Daniel`);
  //  }
   // else {
    //    process.stderr.write('input was empty')
 //   }
//});
fs.appendFileSync(`./notes.txt`, ` \nMy name is Rivka`);
fs.appendFileSync(`./notes.txt`, ` \nMy name is Elisheva`);
var a=2

// faire la meme chose mais cette fois il doit lire dans la console avec un callback (page 24 du pdf) au lieu de l'ecrire dans le fichier