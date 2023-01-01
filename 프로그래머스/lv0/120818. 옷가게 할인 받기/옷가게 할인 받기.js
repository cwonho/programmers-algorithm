function solution(price) {
//     let answer=price;
    
//     if (price >= 500000) {
//         answer-=price*0.2;
//     } else if (price >= 300000) {
//         answer-=price*0.1;
//     } else if (price >= 100000) {
//         answer-=price*0.05;
//     }
    
//     return parseInt(answer);
    
    return price >= 500000 ? parseInt(price*0.8) :
    price >= 300000 ? parseInt(price*0.9) :
    price >= 100000 ? parseInt(price*0.95) :
    parseInt(price);
}