//폰켓몬 문제

function solution(nums) {
    var answer = [...new Set(nums)];
    var result = 0;
    if(nums.length / 2 < answer.length){
        return nums.length / 2
    }
    else {
        return answer.length;
    }
    
}