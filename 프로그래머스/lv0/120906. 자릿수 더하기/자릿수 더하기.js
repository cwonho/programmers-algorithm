function solution(n) {
    return [...String(n)].map(n=>Number(n)).reduce((acc, curr) => acc+curr);
}