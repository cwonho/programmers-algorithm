function solution(array) {
    let newArr = array.sort((a, b) => a - b );
    let index = parseInt(array.length/2);
    return newArr[index];
}