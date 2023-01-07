function solution(cipher, code) {
    let result='';
    for (let i=code-1; i<=cipher.length-1; i+=code) result+=cipher[i];
    
    return result;
}