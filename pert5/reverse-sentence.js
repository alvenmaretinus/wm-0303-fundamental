const sentence = 'Ibu berbelanja ke pasar rabu kemarin'

const reverseWord = (arr) => {
  const newArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr.join('')
}

const reverseSentence = sentence => {
  return sentence.split(' ').map(word => reverseWord(word)).join(' ')
}

console.log(reverseSentence(sentence))
