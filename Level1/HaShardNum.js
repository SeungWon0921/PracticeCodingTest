//하샤드 수

function solution(x) {
    var answer = true;
    const a = Array.from(String(x), Number);
    const sum = a.reduce((a,b) => (a+b));  
    if(x%sum != 0)answer =false;
    return answer;
}