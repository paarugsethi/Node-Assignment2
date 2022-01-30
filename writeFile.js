const fs = require('fs');

// fs.writeFile("name.txt", "Paarug Sethi", err => {
//     if (err) {
//         console.log(err);
//         return
//     }

// })

// fs.mkdir('meta', err => {
//     if (err){
//         console.log(err);
//         return
//     }
// })

// fs.rename('name.txt', 'meta/my_name.txt', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
// })

try {
    // fs.writeFileSync('nameSync.txt', "Paarug Sethi Sync")
    fs.mkdirSync('metaSync')
    fs.renameSync('nameSync.txt', 'metaSync/my_name_sync.txt')

  } catch (err) {
    console.error(err)
  }
  