const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reverseArray = (arr) => {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

console.log(reverseArray(array))
