const fs = require('fs');
const faker = require('faker');
try{
for(let i = 0;i<1000;i++){
    
    var randomName = faker.name.findName();
    fs.appendFileSync('names.txt',randomName+'\n');

}

    console.log('Archivo de nombres creado exitosamente!');
}
catch(error){
    console.log('Error al crear el archivo con los nombres');
}