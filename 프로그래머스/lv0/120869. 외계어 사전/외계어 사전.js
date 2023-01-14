function solution(spell, dic) {
    spell = spell.sort().join('');
    
    dic = dic.map(v=>v.split('').sort().join('')).find(el=>el===spell);
    
    return dic ? 1 : 2;
}