//2019 KAKAO BLIND RECRUITMENT 실패율 문제

function solution(N, stages) {
    var answer = new Array(N + 1).fill(0);
    for (let i = 1; i <= N + 1; i++) {
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] === i) {
                answer[i - 1]++;
            }
        }
    }
    var sum = answer.reduce((a, b) => a + b);
    console.log(sum);
    var result = [];
    for (let k = 0; k < answer.length; k++) {
        result.push([answer[k] / sum, k + 1]);
        sum = sum - answer[k];
    }
    result.pop();
    result.sort((a, b) => b[0] - a[0]);
    return result.map(a => a[1]);
}
