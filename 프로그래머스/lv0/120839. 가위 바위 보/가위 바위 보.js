function solution(rsp) {
    winGame = {
        "2": "0",
        "0": "5",
        "5": "2",
    }
    
    return [...rsp].map(rsp => winGame[rsp]).join('');
}