function solution(price) {
    let answer=price;
    
    if (price >= 500000) {
        answer-=price*0.2;
    } else if (price >= 300000) {
        answer-=price*0.1;
    } else if (price >= 100000) {
        answer-=price*0.05;
    }
    
    return parseInt(answer);
}