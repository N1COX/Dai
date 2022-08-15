/*Desarrollar una aplicación que utilizando el módulo interno fs (FileSystem) 
haga un programa que lea un archivo y lo escriba con otro nombre.
Desarrollarlo en forma de función.*/


const fs = require('fs');

getNombreArchivoTxt();

fs.rename('Uriel Rabih.txt', 'Nicolas Feldman.txt', () => {
console.log("\nFile Renamed!\n");

getNombreArchivoTxt();
});


function getNombreArchivoTxt() {
console.log("Nombre actual:");
fs.readdirSync(__dirname).forEach(file => {
	console.log(file);  
});
}
