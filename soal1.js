const prompt = require('prompt-sync')({sigint: true});

const number = prompt('Masukan nilai: ');

var squaredRoot;

if(number<=0){

    console.log("Tidak bisa input bilangan negatif")

} else if(number%2!=0) {

    console.log("Tidak bisa input bilangan ganjil")

} else {

    squaredRoot = Math.sqrt(number);
    console.log("Hasil dari akar " + number + " = " + squaredRoot)
}