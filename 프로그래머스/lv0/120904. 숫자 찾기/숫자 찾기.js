function solution(num, k) {
    return String(num).includes(k) ? String(num).indexOf(k)+1 : -1;
}