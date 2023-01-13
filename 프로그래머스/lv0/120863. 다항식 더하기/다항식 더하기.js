function solution(polynomial) {
    [x, c] = polynomial.split(' + ').reduce(([a, b], curr) => {
        if (curr.includes('x')) {
            return [a + +(curr.replace('x', '') || 1), b];
        }
        return [a, b + +curr];
    }, [0, 0])
    
    if (!x && !c) return '0';
    
    if (!x) return c.toString();
    
    x = `${x===1 ? '' : x}x`;
    
    if (!c) return x;
    
    return `${x} + ${c}`;
}