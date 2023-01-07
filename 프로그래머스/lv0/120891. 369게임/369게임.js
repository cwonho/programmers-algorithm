function solution(order) {
    return [...String(order).matchAll(/[3|6|9]/g)].length;
}