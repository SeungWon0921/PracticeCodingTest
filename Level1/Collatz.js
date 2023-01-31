//콜라츠 추측

function solution(num) {
    let answer = 0;
    while (num != 1) {
        num % 2 == 0 ? (num = num / 2) : (num = 3 * num + 1);
        answer++;
    }
    answer >= 500 ? (answer = -1) : answer;
    return answer;
}
