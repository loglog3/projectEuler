let count = 0
let num = 1
let divider = 1

while(count < 10001) {
    num += 1
    let result
    for(let d = 2; d < num; d++) {
        if(num % d == 0) {
            result = false
            break
        }
    }
    if(result == false) {
    } else {
        count += 1
        console.log(num, count)
    }
}

