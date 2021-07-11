// 가장 큰 소인수 구하기
// 2부터 숫자 하나 둘 키워가며, 계속 나눈다.
// 나누기 성공하면 인수를 배열에 넣는다
// 다시 2부터 나누기 시작한다.
// 배열에 있는 큰 수부터 소수판별기에 넣는다.
// 소수판별기에서 소수가 나오면 그 값이 소인수 중 가장 큰 수 이다
let log = console.log
let weirdNumber = 600851475143
let idx = 2
let setOfFactors = new Set()
let primeFactors = new Array()
// 소수판별기 만들기 -> 알고보니 필요 없습니다.
const stupidPrimeNumberDiscriminator = (num) => {
  let idx =  2
  while(idx < num) {
    // num이 idx로 나눠지면, 
    if (num % idx == 0) {
      return false 
    } else {
      idx += 1
    }
  }
  return true
}

// weirdNumber 의 인자들을 arrayOfFactors에 넣어줍니다
while(idx <= weirdNumber) {
  if(weirdNumber % idx == 0) {
    setOfFactors.add(idx)
    weirdNumber /= idx
  } else {
    idx += 1
  }
}

log(setOfFactors)
log(Math.max(...setOfFactors))