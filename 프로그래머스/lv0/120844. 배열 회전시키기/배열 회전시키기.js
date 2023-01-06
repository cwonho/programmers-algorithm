function solution(numbers, direction) {
    let result=[...numbers];
    
    for (let i=0; i<numbers.length; i++) {
        if (direction === "right") {
            if (i === 0) {
                result[i] = numbers[numbers.length-1];
            } else {
                result[i] = numbers[i-1];
            }
        }
        else {
            if (i === numbers.length-1) {
                result[i] = numbers[0];
            } else {
                result[i] = numbers[i+1];
            }
        }
    }
    return result;
}