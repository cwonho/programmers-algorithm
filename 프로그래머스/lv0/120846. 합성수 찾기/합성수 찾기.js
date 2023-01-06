function solution(n) {
    let count=0;

    for (let i=4; i<=n; i++) {
        if (isCompositeNum(i)) count++;
    }
    return count;
}

function isCompositeNum(n) {
    let count=0;
    for (let i=1; i<=n; i++) {
        if (n%i === 0) count++;
    }
    return count>=3 ? true : false;
}