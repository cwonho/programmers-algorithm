function solution(my_string) {
    return [...my_string.replace(/[a-z]/g, '')].map(num => Number(num)).sort((a,b) => a-b);
}