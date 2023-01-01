function solution(money) {
    let answer=[];
    const maxCup = parseInt(money/5500);
    const leftOver = money - 5500*maxCup;
    
    answer.push(maxCup, leftOver);
    
    return answer;
}