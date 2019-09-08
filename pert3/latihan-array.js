const carBrands = [
  'Suzuki',
  'Honda',
  'Toyota',
  'Mercedez',
  'Jaguar',
  'Mazda'
]

// ambil index member array
console.log(carBrands.indexOf('Mitsubishi')) // -1

// assign value ke suatu index array
carBrands[7] = 'Wuling'

// sort dari kecil ke besar
carBrands.sort()

// sort dari besar ke kecil
carBrands.sort(function (a, b) {
  return a > b
})

// looping dengan for loop (undefined tetep diloop)
for (let i = 0; i < carBrands.length; i++) {
  console.log(`${i + 1}. ${carBrands[i]}`)
}

console.log('\n')

// looping dengan foreach (undefined diskip)
carBrands.forEach(function (carBrand, index) {
  console.log(`${index + 1}. ${carBrand}`)
})
