// recursive programme to find sum of first n natural number
const sumNatural = function (n) {
  if (n <= 0) {
    return 0;
  }

  return n + sumNatural(n - 1);
};
// recursive for fabinacci series
// 0,1,2,3,4,5,6,7
// 0,1,1,2,3,5,8,13
function fabinacciRec(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fabinacciRec(n - 2) + fabinacciRec(n - 1);
}
// fabinacciRec(5)
// SC = O(n) AS = O(n)

// fabinacci using array

function fabinacciArr(n) {
  //   arr.length = n + 1;
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  console.log(arr);
  console.log(arr[n]);
}
// fabinacciArr(8);

// more optimised solution for fabinacci

function fabinacciOp(n) {
  if (n < 2) {
    console.log(n);
  } else {
    let [a, b] = [0, 1];
    for (let i = 2; i <= n; i++) {
      // let temp = a + b;
      // a = b;
      // b = temp;
      [a, b] = [b, a + b];
    }
    console.log(b);
  }
}

// 1 finding the no of digits in a number
//  ITERITIVE    METHOD

{
  const nod = function (n) {
    let count = 0;
    while (Math.floor(n !== 0)) {
      n = Math.floor(n / 10);
      count++;
    }
    return count;
  };
  // optimised
  // nod = Math.floor(Math.log10(n)) + 1;
}

// 2  PALINDROME

const palindrome = function (num) {
  let temp = num;
  let rev = 0;
  if (num < 0) {
    return false;
  }
  while (temp !== 0) {
    let ld = temp % 10;
    rev = rev * 10 + ld;
    temp = Math.floor(temp / 10);
  }
  return rev === num;
};
// more optimised
var isPalindrome = function (x) {
  // edge case
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNum = 0;
  while (x > revertedNum) {
    revertedNum = revertedNum * 10 + (x % 10);
    x = parseInt(x / 10);
    console.log(`revertedNUM : ${revertedNum}`);
    console.log(`x : ${x}`);
  }

  return x === revertedNum || x === parseInt(revertedNum / 10);
};

// 3 Factorial of number
// Iteritive Method

const fact = function (num) {
  let res = 1;
  for (i = 2; i <= num; i++) {
    res = res * i;
  }
  return res;
};
// recursive Method
const factorial = (N) => {
  if (N === 0) {
    return 1;
  } else {
    return N * factorial(N - 1);
  }
};

// digits in factorial
const digitsInFactorial = function (N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    count += Math.log10(i);
  }
  return Math.floor(count) + 1;
};
// log a*b*c = log a + log b + log c ;

// 4 TRAILING ZEROES IN FACTORIAL
// Naive solution --note issue of overflow for higher value of num eg 20
{
  const trailingZeros = function (num) {
    let fact = 1;
    for (i = 2; i <= num; i++) {
      fact = fact * i;
    }
    let res = 0;
    while (fact % 10 == 0) {
      res++;
      fact = fact / 10;
    }
    return res;
  };
}
// efficient Method

const trailingZeros = function (n) {
  let res = 0;
  for (i = 5; i <= n; i = i * 5) {
    res += Math.floor(n / i);
  }
  return res;
};
// 5.0 gcd/hcf
// // naive sol for loop
const hcf = (x, y) => {
  for (let i = Math.min(x, y); i > 0; i--) {
    if (x % i == 0 && y % i == 0) {
      return i;
    }
  }
};
// euclideon algorithm
// gcd(a,b) = gcd(a - b, b) (if a > b)
// gcd(10, 15)
// (15, 10)
// (10, 5)
// (5, 0)
// return 5
// eucid
// optimised sol GCD/HCF
const gcd = (x, y) => (!y ? x : gcd(y, x % y));

// 5.1 LCM

let lcm = (a, b) => {
  let gcd = (a, b) => {
    if (b == 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };

  return (a * b) / gcd(a, b);
};

// 6 PRIME NuMBER
// Naive sol
const primeNum = function (n) {
  if (n == 1 || n == 0) {
    return false;
  }
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};
// time complexity = O(n)
// in worst case loop will run for (n-2) times

{
  const primeNum1 = function (n) {
    if (n == 1 || n == 0) {
      return false;
    }
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  };
}
// time complexity = O(sqrt(n))

// More efficient sol
function primeNum2(n) {
  if (n == 1 || n == 0) {
    return false;
  } else if (n == 2 || n == 3) {
    return true;
  } else if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

// 7
const primeFactor = function (n) {
  for (i = 2; i <= n; i++) {
    if (primeNum(i)) {
      let x = i;
      while (n % x == 0) {
        console.log(i);
        x = x * i;
      }
    }
  }
};
// efficient sol by factoriztion technique
const primeFac = function (n) {
  if (n <= 1) {
    return;
  }
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }
  while (n % 3 == 0) {
    console.log(2);
    n = n / 3;
  }
  for (i = 5; i * i <= n; i++) {
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
    while (n % (i + 2) == 0) {
      console.log(i + 2);
      n = n / (i + 2);
    }
  }
  if (n > 3) {
    console.log(n);
  }
};

// 8
{
  const divisors = function (n) {
    for (i = 1; i * i <= n; i++) {
      if (n % i == 0) {
        console.log(i);
        if (i != n / i) {
          console.log(n / i);
        }
      }
    }
  };
}

const divisors = function (n) {
  for (i = 1; i * i < n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
  for (; i >= 1; i--) {
    if (n % i == 0) {
      console.log(n / i);
    }
  }
};

// 9
const printPrimes = function (n) {
  for (i = 1; i <= n; i++) {
    if (primeNum(i)) {
      console.log(i);
    }
  }
};
// time complexity = O(n*sqrt(n))

// Sieve of eratosthenes
const sieve = function (n) {
  prime = Array.from({ length: n + 1 }, (v, i) => true);
  for (i = 2; i * i <= n; i++) {
    if (prime[i] == true) {
      for (j = 2 * i; j <= n; j = j + i) {
        prime[j] = false;
      }
    }
  }
  for (i = 2; i <= n; i++) {
    if (prime[i]) {
      console.log(i);
    }
  }
};

// more optimized sol
{
  const sieve = function (n) {
    prime = Array.from({ length: n + 1 }, (v, i) => true);
    for (i = 2; i <= n; i++) {
      if (prime[i] == true) {
        console.log(i);
        for (j = i * i; j <= n; j = j + i) {
          prime[j] = false;
        }
      }
    }
  };
}
// time complexity = O(nloglog n) dont go in maths; in naive sol it was n*sqrt(n);

// 10
{
  const power = function (x, n) {
    let res = 1;
    for (i = 1; i <= n; i++) {
      res = res * x;
    }
    return res;
  };
}
// TC = theta(n)

// efficient recursive solution
const power = function (x, n) {
  if (n == 0) {
    return 1;
  }

  let temp = power(x, Math.floor(n / 2));
  temp = temp * temp;
  if (n % 2 == 0) {
    return temp;
  } else {
    return temp * x;
  }
};

// TC = theta(log n)
// auxilary space = theta (log n)

// Example 1:

// Input: str1 = "ABCABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

var gcdOfStrings = function (str1, str2) {
  if(str1 + str2 !== str2 + str1) {
    return ""
  }
  const gcd =(x,y) => !y ? x : gcd(y, x % y)
  return str1.slice(0, gcd(str1.length, str2.length))
};
// gcdOfStrings("ABCABC", "AB");
// gcdOfStrings("ABABAB", "ABAB");
