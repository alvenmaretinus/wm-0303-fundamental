// cara bikin class pake function
function Human(name, age) {
  this.name = name
  this.age = age
}

Human.prototype.money = 50000
Human.prototype.money -= 20000

const human1 = new Human('Alven', 23)
console.log(human1)
console.log(human1.money)

const human2 = new Human('Ani', 30)
human2.money = 5000
console.log(human2)
console.log(human2.money)

// cara copy yg salah
// const human3 = human1
// human3.name = 'HEHE'
// console.log('human3', human3)
// console.log('human1', human1)


////////////// Copy object ////////////////

// cara lama
// const human3 = Object.assign({}, human1)

// cara baru
const human3 = { ...human1 }

human3.name = 'HEHE'
console.log('human3', human3)
console.log('human1', human1)
