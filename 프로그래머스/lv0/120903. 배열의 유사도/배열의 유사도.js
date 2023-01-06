function solution(s1, s2) {
    return s1.filter((elem => s2.includes(elem))).length;
}