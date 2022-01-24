const sumFromInitial = (a) => {
  return (b) => {
    return a + b
  }
}

const sumFrom5 = sumFromInitial(5)
console.log(sumFrom5.toString())

console.log(sumFrom5(5))
console.log(sumFrom5(6))