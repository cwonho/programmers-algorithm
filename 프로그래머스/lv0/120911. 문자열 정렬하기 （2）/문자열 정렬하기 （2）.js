function solution(my_string) {
    return [...my_string].map(v => v.toLowerCase()).sort().join('');
}