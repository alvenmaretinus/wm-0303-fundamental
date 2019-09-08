const fibo = (num) => {
  const arr = [1, 1]
  for (let i = 0; i < num; i++) {
    arr.push(arr[i] + arr[i + 1])
  }
  console.log(arr.join(', '))
}

fibo(100)
