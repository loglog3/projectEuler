// 1번
// let x = 1
// let sum =0
// while(x < 1000) {
//   if(x%15 == 0) {
//     sum += x
//   } else if (x%5 == 0) {
//     sum += x
//   } else if (x%3 == 0) {
//     sum += x
//   }
//   x+= 1
// }

// 2번
while(x < 1000) {
  if(x%15 == 0 || x%5 == 0 || x%3 == 0) {
    sum += x
  }
  x += 1
}


//  3번
// let sum = 0
// let x = 1
// let y = 1
// let z = 1
// while(3*x < 1000) {
//   sum += 3*x
//   x += 1
// }

// while(5*y < 1000) {
//   sum += 5*y
//   y += 1
// }

// while(15*z < 1000) {
//   sum -= 15*z
//   z += 1
}

console.log(sum)