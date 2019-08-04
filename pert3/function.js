////////////////////////
// function statement //
////////////////////////

// function statement pada runtime akan di naikkin ke atas
// sehingga aman digunakan bahkan sebelum deklarasi
// istilah ini disebut "hoisting"

// name adalah function parameter
function greet(name = 'stranger') {
  console.log(`Hello ${name}`)
}

function alertUser() {
  console.log('Error detected')
}

/////////////////////////
// function expression //
/////////////////////////

// function expression harus dideklarasi dulu sebelum dipakai

const growl = function () {
  console.log('Meong')
}

// ketika user baru masuk
greet('Alven')
greet('Budi')
greet('Rico')
greet('Ahmad')
greet()

// ketika user melakukan kesalahan
alertUser()

// ketika kucing meong
growl()

///////////////////////////
// function return value //
///////////////////////////

// return value membuat function "menghasilkan value" ketika dijalankan

const eat = function (foodName) {
  console.log(`I am eating ${foodName}`)

  // by default function akan return undefined
  // return undefined
}

const hasilFunction = eat('bibimbap')
console.log(hasilFunction) // undefined

const getSpecialNumber = function () {
  // variabel test punya function getSpecialNumber 
  // const test = 45

  return 888
}

// variabel test punya GLOBAL EXECUTION CONTEXT
const test = 89

const number = getSpecialNumber()
console.log(number)
console.log(number + 200)
console.log(Math.pow(number, 2))
console.log(test)
