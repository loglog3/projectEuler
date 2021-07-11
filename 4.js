// 대칭수들을 먼저 찾는다
// 대칭수 확인하는 로직
// 대칭수가 두개의 세자리 수 로 나누어지는지 확인한다

let maxNum = 999*999
let minNum = 100*100
let x = maxNum

let isPalindrome = (str) => {
  let arr = str.toString().split('')
  for(let i =0; i< Math.floor(arr.length/2); i++) {
    if(arr[i] != arr[arr.length-i-1]) {
      return false
    }
  }
  return true
}

let firstWhileFlag = false
while(x >= minNum) {
  if(isPalindrome(x)) {
    let firstNum = 100
    while(firstNum <= 999) {
      if (x % firstNum != 0) {
        firstNum += 1
        continue
      }
      let secondNum = x/firstNum
      if(secondNum >= 100 && secondNum <= 999) {
        console.log('x', x, 'firstNum',firstNum, 'secondNum', secondNum)
        firstWhileFlag = true
        break
      }
      firstNum += 1
    }
  }
  x -= 1
  if(firstWhileFlag) {
    break
  }
}