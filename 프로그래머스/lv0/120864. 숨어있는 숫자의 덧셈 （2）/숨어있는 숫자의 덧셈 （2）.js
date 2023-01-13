function solution(my_string) {
    
    return my_string.match(/\d+/g)===null ? 0 : my_string.match(/\d+/g).reduce((acc, curr) => acc + +curr, 0);
}