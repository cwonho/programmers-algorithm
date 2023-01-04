function solution(balls, share) {
    return calcFactorial(balls) / (calcFactorial(balls-share) * calcFactorial(share))
}

function calcFactorial(num) {
    let factorial=BigInt(1);
    for (let i=2; i<=num; i++) factorial*=BigInt(i);
    return factorial;
}