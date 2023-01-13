function solution(my_string) {
    let result=0;
    
    for (let i=0; i < my_string.length; i++) {
        let currNum='';
        
        while (!isNaN(+my_string[i])) {
            currNum += my_string[i];
            i++;
        }
        
        result += +currNum;
    }
    
    return result;
}