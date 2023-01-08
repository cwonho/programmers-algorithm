function solution(quiz) {
    return quiz.map(v => v.replace('=','-').split(' ').reduce((acc,curr,idx,arr) =>
                                                             curr === '+' ? +acc + +arr[idx+1] : curr === '-' ? +acc - +arr[idx+1] : acc) === 0 ? 'O' : 'X');
}