function solution(numbers) {
//     let max = Number.MIN_SAFE_INTEGER;
    
//     for (let i=0; i<numbers.length-1; i++) {
//         for (let j=i+1; j<=numbers.length-1; j++) {
//             if (numbers[i]*numbers[j] > max) max = numbers[i]*numbers[j];
//         }
//     }
//     return max;
    numbers.sort((a, b) => b - a);
    
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}