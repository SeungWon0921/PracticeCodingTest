// K번쨰수

function solution(array, commands) {
    var answer = [];
    let n = 0
    while(n < commands.length){
     let i = commands[n][0];
     let j = commands[n][1];
     let k = commands[n][2];
     const newarr = array.slice(i-1,j); 
    newarr.sort(function(a, b)  {
  return a - b;
    });
    answer.push(newarr[k-1]);
        n++;
    }
    return answer;
}