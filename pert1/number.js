const x = 100
const y = 97

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

// hasil dari pembagian
console.log(x % y)

let number = 5

// increment ++
// number = number + 1
number++
console.log(number)

// decrement --
// number = number - 1
number--
console.log(number)

// number = number + 5
// number = number - 5
// number = number * 5
// number = number / 5
// number = number % 5
number += 5
number -= 5
number *= 5
number /= 5
number %= 5
console.log(number)

///////////////////////
// Basic Math Object //
///////////////////////

// phi (bilangan pytagoras)
console.log(Math.PI)

// absolute - dipakai untuk mencari selisih, bilangan negatif jadi positif
console.log(Math.abs(-9.43))

// power - perpangkatan, 2 pangkat 4
console.log(Math.pow(2, 4))

// squareroot - akar pangkat 2
console.log(Math.sqrt(81))

// cubicleroot - akar pangkat 3
console.log(Math.cbrt(27))

// CHALLENGE: hitung luas lingkaran berjari jari 28cm
// phi * r ^ 2
const r = 28
const area = Math.PI * Math.pow(r, 2)
console.log(area)

// pembulatan
console.log(Math.round(12.6))
console.log(Math.floor(12.6))
console.log(Math.ceil(12.6))

// max & min
console.log(Math.max(54, 67, 99, 100))
console.log(Math.min(54, 67, 99, 100))

// random - menghasilkan angka antara 0 - 1
console.log(Math.random())

// CHALLENGE: random angka range 1 - 10
const randomNum = Math.ceil(Math.random() * 10)
console.log(randomNum)
