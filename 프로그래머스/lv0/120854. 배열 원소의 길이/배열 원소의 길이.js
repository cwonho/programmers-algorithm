function solution(strlist) {
    return strlist.reduce((acc, curr) => {
        acc.push(curr.length);
        return acc;
    }, [])
}