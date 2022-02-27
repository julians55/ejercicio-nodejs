const fs = require('fs');
const faker = require('faker');

for(let i = 0;i<100;i++){
    
    var randomName = faker.name.findName();
    fs.appendFileSync('names.txt',randomName+'\n');

}

console.log('Archivo de nombres creado exitosamente!');