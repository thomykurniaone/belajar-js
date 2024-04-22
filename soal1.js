const prompt = require('prompt-sync')({sigint: true});

const inputNumber = prompt('Masukan nilai: ');

var squaredRoot;

if(inputNumber<=0){

    console.log("Tidak bisa input bilangan negatif")

} else if(inputNumber%2!=0) {

    console.log("Tidak bisa input bilangan ganjil")

} else {

    squaredRoot = Math.sqrt(inputNumber);
    console.log("Hasil dari akar " + inputNumber + " = " + squaredRoot)
}