function solution(denum1, num1, denum2, num2) {
    let topNum = denum1*num2 + denum2*num1;
    let botNum = num1 * num2;
    let maximum;
    
    for (let i=1; i <= botNum; i++) {
        if (botNum%i === 0 && topNum%i === 0) {
            maximum = i;
        }
    }
    
    return [topNum/maximum, botNum/maximum];
}