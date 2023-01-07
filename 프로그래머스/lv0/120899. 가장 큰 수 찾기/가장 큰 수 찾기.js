function solution(array) {
    return array.map((v, idx) => [v, idx]).sort((a, b) => b[0] - a[0])[0];
}