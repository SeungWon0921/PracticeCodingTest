//2022 카카오 테크인턴쉽 성격유형 검사하기문제

function solution(survey, choices) {
    var score = [-3, -2, -1, 0, 1, 2, 3];
    var sum = [0, 0, 0, 0];
    var answer = "";
    for (let i = 0; i < survey.length; i++) {
        if (survey[i] === "RT") sum[0] = sum[0] + score[choices[i] - 1];
        else if (survey[i] === "TR") sum[0] = sum[0] - score[choices[i] - 1];
        else if (survey[i] === "CF") sum[1] = sum[1] + score[choices[i] - 1];
        else if (survey[i] === "FC") sum[1] = sum[1] - score[choices[i] - 1];
        else if (survey[i] === "JM") sum[2] = sum[2] + score[choices[i] - 1];
        else if (survey[i] === "MJ") sum[2] = sum[2] - score[choices[i] - 1];
        else if (survey[i] === "AN") sum[3] = sum[3] + score[choices[i] - 1];
        else if (survey[i] === "NA") sum[3] = sum[3] - score[choices[i] - 1];
    }

    if (sum[0] <= 0) {
        answer += "R";
    } else answer += "T";

    if (sum[1] <= 0) {
        answer += "C";
    } else answer += "F";

    if (sum[2] <= 0) {
        answer += "J";
    } else answer += "M";

    if (sum[3] <= 0) {
        answer += "A";
    } else answer += "N";

    return answer;
}
