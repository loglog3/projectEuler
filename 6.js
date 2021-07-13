let sumSquare=0
let squareSum=0

for(let i=1; i<=100; i++) {
    sumSquare += i
}
sumSquare = sumSquare**2

for(let i=1; i<=100; i++) {
    squareSum += i**2
}

console.log(sumSquare - squareSum)