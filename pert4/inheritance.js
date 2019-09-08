// parent class
class Human {
  constructor() {
    this.eyeCount = 2
    this.noseCount = 1
    this.mouthCount = 1
  }

  walk() {
    console.log('Human is walking')
  }

  breathe() {
    console.log('Human is breathing')    
  }
}

// child class
class Teacher extends Human {
  constructor(name, level) {
    // panggil constructor parent class
    super()
    this.name = name
    this.level = level
  }

  teach() {
    console.log(`${this.name} is teaching`)
  }

  // method overriding
  walk() {
    console.log(`${this.name} the teacher is walking`)
  }
}

const primarySchoolTeacher = new Teacher('Yanto', 'staff')
primarySchoolTeacher.teach()
primarySchoolTeacher.walk()
primarySchoolTeacher.breathe()
console.log(primarySchoolTeacher.eyeCount)
