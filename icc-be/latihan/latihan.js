
let umur = 30;

if(umur >= 25){

console.log("Rafi Akmal syaiban");
} else {
    console.log("tidak ada"); }


let totalbayar = 500000

let uang = 600000

let kembalian 

if(totalbayar < uang){
    kembalian = uang - totalbayar;
    console.log("kembalian anda =",kembalian);
}else if (totalbayar > uang) {
    console.log ('uang tidak cukup')
}else if (totalbayar == uang){
    console.log("tidak ada kembalian")
}

let film = "Dewasa"

let umur = 30

if (film == "Dewasa" && umur >= 20){
    console.log("bisa masuk")
}else if (film == "anak" && umur >=10 && umur < 20) {
    console.log("bisa masuk")
}else {
    console.log("Tidak bisa masuk")
}

let film = "spongebob"
let umur = 100

if  (film == "avenger" && umur >= 20 && umur < 80) {
    console.log("bisa menonton film avenger")
}else if(film == "spongebob" && umur > 10 && umur < 20){
    console.log("bisa menonton film spongebob")
}else if (umur >= 80) {
    console.log("terlalu tua")
}else {
    console.log("tidak bisa menonton")
}

const calculator=(tipe, angka1, angka2 )=>{
    if (tipe== "pengurangan"){
       return angka1 - angka2
    }else if (tipe== "penjumlahan"){
       return angka1 + angka2
    }else if (tipe== "perkalian"){
       return angka1 * angka2
    }else if (tipe== "pembagian"){
       return angka1 / angka2
    }
   }
   console.log(calculator("pembagian",2,2))

   const hobbies = ["coding", "gaming", "musik", "cooking", "gardening", "hiking"];
console.log(hobbies.filter((hobby) => !hobby.includes("o")));

const buah = [
    "apel",
    "anggur",
    "jeruk",
    "melon",
    "durian",
    "pisang",
    "jambu",
    "semangka",
    "durian",
    "melon"

]
buah [8] = "jambu"; 
buah [1] = "pisang";
console.log(buah);