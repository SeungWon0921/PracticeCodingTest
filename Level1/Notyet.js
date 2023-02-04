function solution(s, skip, index) {
    var answer = [];
    var replace = "";
    var skiparray = [...skip];
    const alpha = Array.from({ length: 26 }, (v, i) =>
        String.fromCharCode(i + 97)
    );
    var sum = alpha.concat(skiparray);
    var union = sum.filter((item, index) => sum.indexOf(item) === index);
    var intersec = sum.filter((item, index) => sum.indexOf(item) !== index);
    var difference = union.filter(x => !intersec.includes(x));

    for (let i = 0; i < s.length; i++) {
        answer.push(s.charCodeAt(i) - 97 + index);
    }
    console.log(answer);
    console.log(difference);
    for (let j = 0; j < answer.length; j++) {
        if (answer[j] < difference.length) {
            replace += difference[answer[j]];
        } else {
            replace += difference[answer[j] - difference.length];
        }
    }
    return replace;
}
