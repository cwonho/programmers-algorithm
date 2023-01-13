function solution(keyinput, board) {
    let pos = [0, 0];
    
    const key = {
        "up": [0, 1],
        "down": [0, -1],
        "right": [1, 0],
        "left": [-1, 0]
    }
    
    const wall = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    
    keyinput.forEach(dir => {
        if (Math.abs(pos[0]+key[dir][0]) <= wall[0] && Math.abs(pos[1]+key[dir][1]) <= wall[1]) {
            pos[0] += key[dir][0];
            pos[1] += key[dir][1];
        }
    })
    
    return pos;
}