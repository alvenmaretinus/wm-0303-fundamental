// bikin class
class Student {
  constructor(name, age, nationality) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  // method (function dalam class)
  study() {
    console.log(`${this.name} is studying`)
  }
}

// bikin object
const alven = new Student('Alven', 23, 'Indonesian')
const herman = new Student('Herman', 20, 'Indonesian')
const hendra = new Student('Hendra', 21, 'Indonesian')

console.log(alven)
console.log(herman)
console.log(hendra)
alven.study()
herman.study()
