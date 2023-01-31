//문자열 내 p와 y의 개수

function solution(s) {
    let x = 0;
    let y = 0;
    s.toLowerCase();
    var reg = /[P,p]/gi;
    var reg2 = /[Y,y]/gi;
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(reg)) x += 1;
        else if (s[i].match(reg2)) y += 1;
    }
    return x == y ? true : false;
}
