function solution(num_list) {
    let answer=[0, 0];
    
    for (let num of num_list) {
        answer[num%2] += 1;
    }
    
    return answer;
}