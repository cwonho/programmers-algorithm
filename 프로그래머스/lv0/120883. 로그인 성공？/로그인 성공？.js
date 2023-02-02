function solution(id_pw, db) {
    let ans;
    for(user of db) {
        if(user[0] === id_pw[0] && user[1] === id_pw[1]) {
            ans = "login";
            break;
        } else if(user[0] === id_pw[0] && user[1] !== id_pw[1]) {
            ans = "wrong pw";
        } else if(user[0] !== id_pw[0] && user[1] !== id_pw[1]) {
            ans = "fail";
        }
    };
    return ans;
}