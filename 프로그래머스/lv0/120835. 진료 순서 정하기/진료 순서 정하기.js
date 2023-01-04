function solution(emergency) {
    let sorted = emergency.slice().sort((a,b) => b-a);
    
    return emergency.map(elem => sorted.indexOf(elem) + 1);
}