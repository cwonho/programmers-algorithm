function solution(my_string) {
    return my_string.split(' ').reduce((acc, curr, idx, arr) =>
        curr === '+' ? +acc + +arr[idx+1] : curr === '-' ? +acc - +arr[idx+1] : acc)
}