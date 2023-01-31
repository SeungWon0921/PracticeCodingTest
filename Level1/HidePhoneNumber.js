//핸드폰 번호 가리기

function solution(phone_number) {
    var answer = "";
    const arr = [...phone_number];
    for (i = 0; i < arr.length; i++) {
        if (i < arr.length - 4) answer += "*";
        else answer += arr[i];
    }

    return answer;
}
