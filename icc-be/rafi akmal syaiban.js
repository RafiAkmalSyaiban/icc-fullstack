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