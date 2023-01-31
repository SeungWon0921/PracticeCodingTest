//2020 카카오 인턴쉽 키패드 누르기 문제

function solution(numbers, hand) {
    var xy = [
        [1, -3],
        [0, 0],
        [1, 0],
        [2, 0],
        [0, -1],
        [1, -1],
        [2, -1],
        [0, -2],
        [1, -2],
        [2, -2]
    ];
    var right = [[2, -3]];
    var left = [[0, -3]];

    var answer = "";
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer += "L";
            left[0] = xy[numbers[i]];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer += "R";
            right[0] = xy[numbers[i]];
        } else if (
            numbers[i] === 2 ||
            numbers[i] === 5 ||
            numbers[i] === 8 ||
            numbers[i] === 0
        ) {
            if (
                Math.abs(xy[numbers[i]][0] - left[0][0]) +
                    Math.abs(xy[numbers[i]][1] - left[0][1]) <
                Math.abs(xy[numbers[i]][0] - right[0][0]) +
                    Math.abs(xy[numbers[i]][1] - right[0][1])
            ) {
                answer += "L";
                left[0] = xy[numbers[i]];
            } else if (
                Math.abs(xy[numbers[i]][0] - left[0][0]) +
                    Math.abs(xy[numbers[i]][1] - left[0][1]) >
                Math.abs(xy[numbers[i]][0] - right[0][0]) +
                    Math.abs(xy[numbers[i]][1] - right[0][1])
            ) {
                answer += "R";
                right[0] = xy[numbers[i]];
            } else if (
                Math.abs(xy[numbers[i]][0] - left[0][0]) +
                    Math.abs(xy[numbers[i]][1] - left[0][1]) ==
                Math.abs(xy[numbers[i]][0] - right[0][0]) +
                    Math.abs(xy[numbers[i]][1] - right[0][1])
            ) {
                if (hand === "right") {
                    answer += "R";
                    right[0] = xy[numbers[i]];
                } else {
                    answer += "L";
                    left[0] = xy[numbers[i]];
                }
            }
        }
    }
    return answer;
}
