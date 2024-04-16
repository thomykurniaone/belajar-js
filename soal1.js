const prompt = require('prompt-sync')({ sigint: true });

while (true) {
  const input = prompt('Masukkan angka: ');

  const number = parseInt(input);

  if (isNaN(number)) {
    console.error('Input harus berupa angka.');
    continue;
  }

  if (number < 0) {
    console.error('Tidak bisa input bilangan negatif.');
    continue;
  }

  if (number % 2 !== 0) {
    console.error('Tidak bisa input bilangan ganjil.');
    continue;
  }

  console.log(`Anda memasukkan angka: ${number}`);
  break;
}