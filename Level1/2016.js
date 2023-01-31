// 2016년

function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var answer = day[new Date(`2016-${a}-${b}`).getDay()];
    return answer;
}
