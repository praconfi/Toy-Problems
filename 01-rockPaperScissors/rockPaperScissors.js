/*
* 세 판의 가위바위보를 할 동안 낼 수 있는 모든 경우의 수를 return하는 함수를 작성하세요. 
*
* 결과는 다음과 같을 것입니다. 
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
*         ...etc ...
*    ]

* Advanced: 
* 변수로 전달하는 판수에 맞는 정답을 return 하도록 작성한 함수를 바꿔 보세요.
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*/

const rockPaperScissors = function () {
  //반복시킬 가위바위보가 담겨있는 배열을 만든다.
  //결과값이 될 빈배열은 만든다.
  //반복문을 이용해서 배열을 조합하고 결과값배열에 넣는다.
  let result = [];
  let temp = [];
  let cases = ["rock", "scissors", "paper"];
  for (let i = 0; i < cases.length; i++) {
    for (let j = 0; j < cases.length; j++) {
      for (let k = 0; k < cases.length; k++) {
        temp = [cases[i], cases[j], cases[k]];
        result.push(temp);
      }
    }
  }
  return result;
};
