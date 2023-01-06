function solution(my_string) {
    return my_string.match(/\d/g).sort((a,b)=>a-b).map(num=>Number(num));
}