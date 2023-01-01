function solution(numbers) {
    return numbers.reduce((acc, curr) => acc + curr) / numbers.length;
}