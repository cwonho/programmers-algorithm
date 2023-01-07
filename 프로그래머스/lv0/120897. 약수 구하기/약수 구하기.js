function solution(n) {
    let ans=[];
    let idx=1;
    while (idx <= n) {
        if (n%idx === 0) {
            ans.push(idx);
        }
        idx++;
    }
    return ans;
}