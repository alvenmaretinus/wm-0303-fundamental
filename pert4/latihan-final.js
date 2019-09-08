class Classroom {
  constructor() {
    this.students = []
  }

  // parameter students berupa array
  addStudents(students) {
    // cara 1
    // this.students = [...this.students, ...students]

    // cara 2
    for (let i = 0; i < students.length; i++) {
      this.students.push(students[i])
    }
  }
}

const classroom = new Classroom()
const arr1 = ['henri', 'henni', 'sofyan']
const arr2 = ['andi', 'ani', 'hendra']
classroom.addStudents(arr1)
classroom.addStudents(arr2)

console.log(classroom.students)


console.log('\n\n\n')

const array1 = [1, 2, 3, 4, 5]

const reverseArray = function (array) {
  // your code here
  const newArray = []

  // cara 1
  // for (let i = 0; i < array.length; i++) {
  //   newArray.unshift(array[i])
  // }

  // cara 2
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[i] = array[Math.abs((array.length - 1) - i)]
  }

  return newArray
}

console.log(reverseArray(array1))
