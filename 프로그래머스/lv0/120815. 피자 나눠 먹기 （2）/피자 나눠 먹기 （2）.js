function solution(n) {
    let answer = 0;
    let slices = 6;
    
    while (true) {
        if (slices % n == 0) {
            answer = slices / 6;
            break;
        } else {
            slices += 6;
        }
    }
    return slices/6;
}