
function getMultiples(number, limit) {
    let multiples = []
    for (let n = number + 1; n < limit; n++){
        if (n > number && n % number === 0){
            multiples.push(n)
    }
    

    }
    
    return multiples
  }
  console.log (getMultiples(20, 100))