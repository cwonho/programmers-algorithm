function solution(n) {
    let result;
    
    for (let i=1; i<=10; i++) {
        if (Factorial(i) <= n) {
            result = i;
        }
    }
    
    return result;
}

function Factorial(num) {
    return num===0 ? 1 : num * Factorial(num-1);
}