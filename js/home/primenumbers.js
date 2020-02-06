function getAllPrimeNumber(num) {
    var array = [];
    var isPrime;
    for (var i = 2; i <= num; i++) {    
      for (var j = 2; (isPrime =i === j || i % j !== 0) && j <= i / 2; j++) {} 
  
      isPrime && array.push(i);
    }
    return array;
  }
  console.log(getAllPrimeNumber(5));
  console.log(getAllPrimeNumber(9));