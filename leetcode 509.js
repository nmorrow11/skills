// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number 
// is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

var fib = function(N) {
    let seq = [0,1,1];
    for(let i = 3; i < N + 1; i++){
        seq.push(seq[i-1] + seq[i-2]);
    }
    return seq[N]

};