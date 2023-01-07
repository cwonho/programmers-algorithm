function solution(s) {
    let count ={};
    let ans=[];
    [...s].forEach(char => count[char] = ++count[char] || 1);
    
    for (let key in count) {
        if (count[key] === 1) ans.push(key);
    }
    
    return ans.sort().join('');
    
}