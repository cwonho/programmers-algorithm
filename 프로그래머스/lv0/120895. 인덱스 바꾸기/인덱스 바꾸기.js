function solution(my_string, num1, num2) {
    return [...my_string].map((v, idx, arr) => idx === num1 ? arr[num2] : idx === num2 ? arr[num1] : v).join('');
}