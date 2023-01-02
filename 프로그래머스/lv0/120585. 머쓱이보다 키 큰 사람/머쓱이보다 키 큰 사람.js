function solution(array, height) {
    return array.reduce((acc, curr) => {
        if (curr > height) acc++;
        return acc;
    }, 0)
}