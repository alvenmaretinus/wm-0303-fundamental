// Buat sebuah class bernama Cat (kucing)

// kucing ini memiliki 4 property
// 1. name (string)
// 2. type (string)
// 3. furColor (string)
// 4. hasNails (boolean)
// 5. isAngry (boolean)

// kucing ini memiliki 3 method
// 1. eat()
// 2. sleep()
// 3. becomeAngry()

class Cat {
  constructor(name, type, furColor) {
    this.name = name
    this.type = type
    this.furColor = furColor
    this.hasNails = true
    this.isAngry = false
    this.toys = [
      'red toy',
      'blue toy'
    ]
  }

  eat() {
    console.log(`${this.name} is eating`)
  }

  sleep() {
    console.log(`${this.name} is sleeping`)
  }

  becomeAngry() {
    this.isAngry = true
    console.log(`${this.name} is angry`)
  }
}

const felice = new Cat('felice', 'Persian', 'Golden')

// delete property
delete felice.hasNails
console.log(felice)
// method invocation
felice.becomeAngry()

// looping object
for (prop in felice) {
  console.log(felice[prop])
}
