function solution(array) {
    const newObj = {};
    
    array.forEach(num => {
        newObj[num] = ++newObj[num] || 1;
    })
    
    let modeKey = Object.keys(newObj)[0];
    let mode = newObj[modeKey];
    
    
    for (let key in newObj) {
        if (newObj[key] > mode) {
            mode = newObj[key];
            modeKey = key;
        }
    }
    
    for (let key in newObj) {
        if (newObj[key] === mode && key !== modeKey) return -1;
    }
    
    return Number(modeKey);
}