function solution(array, n) {
    const sorted = array.map(v=>[v, Math.abs(v-n)]).sort((a,b)=>a[1]-b[1]);
    
    return sorted[0][1] === sorted[1][1] ? Math.min(sorted[0][0], sorted[1][0]) : sorted[0][0];
}