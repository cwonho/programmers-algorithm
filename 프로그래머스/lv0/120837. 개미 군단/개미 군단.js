function solution(hp) {
    numCapt = parseInt(hp/5);
    captRemain = hp % 5;
    numSoldier = parseInt(captRemain/3);
    soldierRemain = captRemain % 3;
    numWorker = soldierRemain;
    
    return numCapt + numSoldier + numWorker;
}