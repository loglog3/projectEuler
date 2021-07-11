// 피보나치 만들기
// 짝수이면 더하기 (reduce 이용?)

let array_fibo = []
let sum = 0
let x = 1
const fibo = (x) => {
  if(x ==1) return 1
  if(x ==2) return 2
  return fibo(x-2) + fibo(x-1)
}

while(fibo(x) < 4000000) {
  if(fibo(x) % 2 == 0) sum += fibo(x)
  x += 1
}

console.log(sum)