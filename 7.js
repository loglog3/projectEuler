let count = 0
let num = 1

while(count < 10001) {
    num += 1
    let result
    // 소수 판별, 본인보다 작은 자연수(1제외)로 나눠지면 안된다
    for(let d = 2; d < num; d++) {
        if(num % d == 0) {
            result = false
            break
        }
    }
    // 소수가 아닐경우 아무것도 안한다
    if(result == false) {
    } else {
        //소수일 경우 count 해주고 출력해준다
        count += 1
        console.log(num, count)
    }
}

