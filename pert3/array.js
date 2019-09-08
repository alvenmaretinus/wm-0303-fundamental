// Array di JS `isi`nya bisa campur-campur `tipe data`nya

const students = ['Budi', 'Ani', 'Yanto', 'Herman', 'Chandra']
const carBrands = [
  'Suzuki',
  'Honda',
  'Toyota',
  'Mercedez',
  'Jaguar',
  'Mazda'
]
const mixedArray = [
  'Kalimat',
  345,
  89,
  'Buku tulis',
  function () {
    console.log('wkwkwkwk')
  },
  'hehe'
]

// console log array
console.log(students)

// jumlah member dalam sebuah array
console.log(students.length)

// ubah dari array ke string
console.log(students.toString())

// ubah dari array ke string (custom)
console.log(students.join(' - '))

// print member array
console.log(carBrands[2])

// push
console.log('========== Push ==========')
students.push('Andi')
console.log(students)
students.pop()
console.log(students)

// shift
console.log('========== Shift ==========')
students.unshift('Andi')
console.log(students)
students.shift()
console.log(students)

console.log('\n')
const fruits = ['watermelon', 'pineapple', 'kiwi']

// splice (index, numberOfElements, ...replacing elements)
fruits.splice(0, 1, 'Papaya', 'Grapegruit', 'Blackcurrant')
console.log(fruits)

delete fruits[3]
console.log(fruits)

// slice (index, endIndex + 1)
const numbers = [1, 2, 3, 4, 5]
const colors = ['red', 'green', 'blue', 'black']
console.log(numbers.slice(2, 4))
console.log(colors.slice(1))

// cara lama
// const numbersAndColors = numbers.concat(colors)

// cara baru (es6)
const numbersAndColors = [...numbers, ...colors, 'test123']
console.log(numbersAndColors)

// array is object
console.log(typeof numbersAndColors)
