// we use 'i' variable naming for 'iteration'
// for (let i = 0; i < 20; i++) {
//   console.log(`${i + 1}. hello world`)
// }

// challenge:
// Print angka
// 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// dengan for-loop

// cara 1
for (let i = 2; i <= 20; i += 2) {
  console.log(i)
}

//cara 2
for (let i = 1; i <= 10; i++) {
  console.log(i * 2)
}

console.log('\n\n\n\n')

// loop drawing
let stars = ''
for (let i = 0; i < 10; i++) {
  stars += '*\n'
}
console.log(stars)

// nested if
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log('this is nested if')
  }
}

console.log('\n\n\n\n')
console.log('===========')
console.log('PRINT KOTAK')
console.log('===========')
let box = ''
// j untuk print horizontal
// i untuk print vertical
for (let i = 0; i < 5; i++) {
  for(let j = 0; j < 5; j++) {
    box += '*'
  }
  box += '\n'
}
console.log(box)

console.log('\n\n\n\n')
console.log('========================')
console.log('PRINT SEGITIGA SAMA KAKI')
console.log('========================')
let triangle = ''
// j untuk print horizontal
// i untuk print vertical
for (let i = 0; i < 5; i++) {
  for(let j = 0; j <= i; j++) {
    triangle += '*'
  }
  triangle += '\n'
}
console.log(triangle)

// ini contoh comment
