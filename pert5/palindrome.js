const isPalindrome = (word) => {
  const lowercasedWord = word.toLowerCase()
  const maxIndex = lowercasedWord.length - 1
  let loopCount = Math.floor(lowercasedWord.length / 2)
  
  for (let i = 0; i < loopCount; i++) {
    if (lowercasedWord[i] !== lowercasedWord[maxIndex - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('kasurrusak'))
