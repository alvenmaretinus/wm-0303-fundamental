// function declaration
function makan() {
  console.log(`I'm eating`)
}

// function expression
const sleep = function () {
  console.log(`I'm sleeping`)
}

// arrow function
const study = (subject = 'IPA') => {
  console.log(`I'm studying ${subject}`)
}

// arrow function with return
const getNumber = () => 3

// kalau ini return apa?
const get = () => () => 4

// ekuivalen dgn yg di atas
const get1 = () => {
  return () => {
    return 4
  }
}

study('IPS')
study()
