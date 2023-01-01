function solution(numbers) {
    return numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0) / numbers.length;
}