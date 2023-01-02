function solution(num_list) {
    let answer=[];
    let countOdd=0;
    let countEven=0;
    
    for (let num of num_list) {
        num%2 === 0 ? countEven++ : countOdd++;
    }
    
    answer.push(countEven, countOdd);
    
    return answer;
}