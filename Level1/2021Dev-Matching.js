// 2021 Dev-Matching: 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    var answer = [];
    let count = lottos.reduce((cnt, element) => cnt + (0 === element), 0);
    let intersection = lottos.filter(x => win_nums.includes(x));
    let best = intersection.length  + count;
    let worst = intersection.length;
    switch(best){
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2)
            break;
        case 4:
            answer.push(3)
            break;
        case 3:
            answer.push(4)
            break;
        case 2:
            answer.push(5)
            break;
        default:
            answer.push(6)
            break;
    }
    switch(worst){
        case 6:
            answer.push(1);
            break;
        case 5:
            answer.push(2)
            break;
        case 4:
            answer.push(3)
            break;``
        case 3:
            answer.push(4)
            break;
        case 2:
            answer.push(5)
            break;
        default:
            answer.push(6)
            break;
    }
    return answer;
}