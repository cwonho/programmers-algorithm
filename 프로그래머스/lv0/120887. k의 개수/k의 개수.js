function solution(i, j, k) {
    let numbers='';
    
    for (let idx=i; idx <= j; idx++) {
        numbers += idx;
    }
    
    return [...numbers].filter(v=>+v===k).length;
}