function solution(age) {
    let char = 'abcdefghij'
    
    return [...String(age)].map(num => char[num]).join('');
}