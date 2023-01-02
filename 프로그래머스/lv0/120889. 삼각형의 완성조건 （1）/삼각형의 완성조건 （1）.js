function solution(sides) {
    const sum = sides.reduce((acc, curr) => {
        return acc + curr;
    })
    
    const max = Math.max(...sides);
    
    return (sum-max) > max ? 1 : 2;
}