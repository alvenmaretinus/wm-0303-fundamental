// array
const fruits1 = ['watermelon', 'kiwi', 'apple']
const fruits2 = ['orange', 'grape']

const fruits3 = [...fruits1, ...fruits2]

console.log(fruits3)


// object
const obj1 = {
  name: 'Hendra',
  age: 22
}
const obj2 = {
  occupation: 'Doctor'
}
const obj3 = {
  ...obj1,
  ...obj2
}
console.log(obj3)
