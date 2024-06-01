const { LsEven, LsOdd } = require("./lib.js");

const angka = [10, 5, 7, 8, 13, 4];
console.log(angka.filter(angka => angka % 2 == 0 ))

const filteredAngkaEven = angka.filter((angka) => LsEven(angka));
const filteredAngkaOdd = angka.filter((angka) => LsOdd(angka));

console.log(filteredAngkaEven);
console.log(filteredAngkaOdd);
