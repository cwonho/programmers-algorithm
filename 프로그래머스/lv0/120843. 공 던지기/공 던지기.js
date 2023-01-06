function solution(numbers, k) {
    
    let getBall=1;
    
    for (let i=1; i<k; i++) {
        getBall += 2
        
        if (getBall > numbers.length) {
            getBall -= numbers.length
        }
    }
    return getBall;
}