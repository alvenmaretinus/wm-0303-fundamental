const sentence = 'Ibu pergi beli semangka ke pasar'

// ambil panjang string
console.log(sentence.length)

// ambil posisi index sebuah substring (index dimulai dari 0)
console.log(sentence.indexOf('semangka'))

// ambil substring dari index sekian ke sekian
console.log(sentence.substring(4, 20))

// CHALLENGE: bikin kalimat "beli semangka ke pasar" dari sentence
const kalimatBaru = sentence.substring(sentence.indexOf('beli'), sentence.length)
console.log(kalimatBaru)

// slice string (mirip dgn substring) - jarang dipakai
console.log(sentence.slice(5, 8))

// includes (nge-return boolean)
console.log(sentence.includes('Ibu'))

// split (mengubah string menjadi array)
console.log(sentence.split(' '))

// mengubah menjadi huruf kapital
console.log(sentence.toUpperCase())

// mengubah menjadi huruf kecil
console.log(sentence.toLowerCase())

// mengubah number --> string
const angka = 123456
angka.toString()

// mengubah string --> number
const numberString = '123456'
console.log(parseInt(numberString))

// CHALLENGE: '123' + '456' = '579'
const x = '123'
const y = '456'
const xInt = parseInt(x)
const yInt = parseInt(y)
const result = (xInt + yInt).toString()
console.log(result)

// type coercion - string plus number, number berubah jadi string secara otomatis
const number = 123
console.log('Ibu memiliki angka ' + number)
