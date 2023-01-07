function solution(array, n) {
    return array.map(v=>[v, Math.abs(v-n)]).sort((a,b)=>a[1]-b[1]||a[0]-b[0])[0][0];
}