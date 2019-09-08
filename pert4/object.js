// object literal
const studentData = {
  name: 'Alven',
  class: 'XII IPA 1',
  hobbies: [
    'Gaming',
    'Watching',
    'Travelling',
    'Cooking',
    'Baking',
    'Teaching',
    [
      'Running',
      'Walking'
    ]
  ],
  score: 99,
  walk: function () {
    console.log('walk')
  }
}

studentData.lastName = 'Maretinus'
console.log(studentData.name)
console.log(studentData.lastName)
console.log(studentData.class)
console.log(studentData.hobbies[6][1])
console.log(studentData.score)
studentData.walk()
