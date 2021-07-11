(function () {
  let x = 380 
  while(true) {
      for(let i = 1; i <= 20; i++) {
        if (x%i == 0) {
          if (i == 20) return console.log(x)
        } else {
          break
        }
      }
      x += 1
  }

})()