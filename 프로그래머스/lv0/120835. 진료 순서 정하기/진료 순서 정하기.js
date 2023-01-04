function solution(emergency) {
    let sorted = [...emergency].sort((a,b) => b-a);
    
    return emergency.map(elem => sorted.indexOf(elem) + 1);
}