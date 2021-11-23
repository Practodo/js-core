const fib = (n) => {
    if(n <= 2)
        return 1;
    return fib(n-1) + fib(n-2);
}

const fibo = (n, memo = {}) => {
    if(n in memo){
        console.log("n in memo: " + n);
        return memo[n];
    }
    if(n <=2)
        return 1;
    memo[n] =  fibo(n-1, memo) + fibo(n-2, memo);
    return memo[n];
}

// console.log(fib(6));
// console.log(fib(8));
// console.log(fib(10));
console.log(fibo(50));
