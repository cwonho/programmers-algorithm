function solution(array) {
    const newObj = {};
    
    array.forEach(num => {
        newObj[num] = ++newObj[num] || 1;
    })
    
    const keys = Object.keys(newObj);
    
    keys.sort((a, b) => newObj[b] - newObj[a]);
    
    mode = Number(keys[0]);
    
    return newObj[keys[0]] === newObj[keys[1]] ? -1 : mode;
}