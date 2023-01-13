function solution(my_string) {
    if (my_string.match(/\d+/g)===null) return 0;
    return my_string.match(/\d+/g).reduce((acc, curr) => acc + +curr, 0);
}